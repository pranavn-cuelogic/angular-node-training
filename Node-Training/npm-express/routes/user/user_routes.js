var hapi = require('hapi'),
    server = new hapi.Server(),
    joi = require('joi'),
    user_mod = require(base + 'modules/user_module.js');

module.exports = [{
        method: 'POST',
        path: '/login',
        handler: user_mod.login,
        config: {
            auth: false,
            validate: {
                payload: {
                    username: joi.string().required(),
                    password: joi.string().required()
                }
            }
        }
    }, {
        method: 'POST',
        path: '/signup',
        handler: user_mod.signup,
        config: {
            auth: false,
            validate: {
                payload: {
                    username: joi.string().min(3).max(10).alphanum().required(),
                    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
                    firstName: joi.string().required(),
                    lastName: joi.string().required(),
                    email_id: joi.string().email(),
                    mobile_no: joi.number().integer().min(10)
                }
            }
        }
    }, {
        method: 'GET',
        path: '/getAllUsers',
        handler: user_mod.getAllUsers,
        config: {
            auth: 'token',
        }
    }, {
        method: 'GET',
        path: '/getUserDetails/{user_name}',
        handler: user_mod.getUserDetails,
        config: {
            auth: 'token',
        }
    }, {
        method: 'PUT',
        path: '/updateUser',
        handler: user_mod.updateUser,
        config: {
            auth: 'token',
            validate: {
                payload: {
                    firstName: joi.string().required(),
                    lastName: joi.string().required()
                }
            }
        }
    }, {
        method: 'GET',
        path: '/getUsersNotLoggedInLastFiveDays',
        handler: user_mod.getUsersNotLoggedInLastFiveDays,
        config: {
            auth: 'token',
        }
    }

];