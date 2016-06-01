var User = require(base + 'models/user').User,
    UserActivity = require(base + 'models/user_activity').UserActivity,
    config = require(base + 'config/config'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    nodemailer = require('nodemailer');

module.exports = {

    login: function(request, reply) {
        User.findUser(request.payload.username, function(err, result) {
            if (err) {
                return reply(err);
            }

            if (result == null) {
                return reply('Invalid username or password!');
            } else {
                bcrypt.compare(request.payload.password, result.password, function(err, hash) {
                    if (err) {
                        return reply(err);
                    }
                    var userData = {
                        username: result.username,
                        firstName: result.firstName,
                        lastName: result.lastName,
                    };

                    var token = jwt.sign({
                        user_id: result._id
                    }, process.env.HASH_KEY, { algorithm: 'HS256' });

                    var userActivityData = {
                        user_id: result._id,
                        ip_address: request.info.remoteAddress,
                        ua_token: token,
                        // signInDate: new Date().getTime() - (5 * 24 * 60 * 60 * 1000)
                    };
                    var userAct = new UserActivity(userActivityData);

                    userAct.save(function(err, result) {
                        if (err) {
                            return reply('Error while storing user activity');
                        }
                    })
                    reply('Logged in:' + userData.firstName + ' ' + token);
                });
            }

        })
    },

    signup: function(request, reply) {

        var user = new User(request.payload);
        // console.log(user);
        user.save(function(err, result) {
            if (err) {
                return reply(err);
            }

            var transporter = nodemailer.createTransport('smtps://' + process.env.EMAIL_ID + ':' + process.env.PASSWORD + '@smtp.gmail.com');

            var mailOptions = {
                from: '"Admin User App" <admin@noreply.com>', // sender address 
                to: user.email_id, // list of receivers 
                subject: 'Registration Succesful', // Subject line 
                text: '', // plaintext body 
                html: '<p><b>Welcome ' + user.firstName + ' ' + user.lastName + '</b></p>' +
                    '<p>You\'ve been successfully registered with User App.</p>' +
                    '<p><strong> Your mobile no: +91-' + user.mobile_no + '. You\'ve been charged Rs.95/- for monthly subscription</p>' +
                    '<p>Thanks for you Intrest</p>' // html body 
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
            });

            reply(user.firstName + ' ' + user.lastName + ' Sign up successfully!');
        });
    },

    getAllUsers: function(request, reply) {
        console.log(request.auth.credentials);
        User.find({}, '_id username firstName lastName', function(err, result) {
            if (err) {
                return reply('Something has went wrong!');
            }

            var userMap = {};

            result.forEach(function(user) {
                userMap[user._id] = user;
            });

            reply(userMap);
        })
    },

    getUserDetails: function(request, reply) {
        console.log(request.params.user_name);
        User.find({ 'username': request.params.user_name }, '_id username firstName lastName', function(err, result) {
            if (err) {
                return reply('Something has went wrong!');
            }
            reply(result);
        })
    },

    updateUser: function(request, reply) {
        User.update({ '_id': request.auth.credentials.user_id }, {
                '$set': {
                    'firstName': request.payload.firstName,
                    'lastName': request.payload.lastName,
                }
            },
            function(err, result) {
                if (err) {
                    return reply(err);
                }
                reply(request.payload.firstName + ' Details has been Updated Successfully');
            }
        );
    },

    getUsersNotLoggedInLastFiveDays: function(request, reply) {
        var currDate = new Date();
        var cutoffDate = currDate.setDate(currDate.getDate() - process.env.SIGN_IN_NUM_OF_DAYS);
        UserActivity
            .find({ 'signInDate': { $lt: cutoffDate } }, 'signInDate user_id')
            .populate('user_id', 'firstName lastName')
            .exec(function(err, result) {
                if (err) {
                    return reply(err);
                }
                reply(result);
            });
    }




}