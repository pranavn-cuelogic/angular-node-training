// Async using waterfall
// async.waterfall([getValue, multiply], finalCallBack);

// function getValue(callback) {
// 	setTimeout(function(err, result) {
// 		if(err) {
// 			callback(new Error('Failed!: ' + err));
// 			return;
// 		}
// 		callback(null, 2);
// 	}, 0);
// }

// function multiply(x, callback) {
// 	if(x == 2) {
// 		callback(null, x * x);
// 		return;
// 	}
// 	callback(new Error('Failed again'));	
	
// }

// function finalCallBack(err, result) {
// 	if(err) {
// 		printMsg(false, 0, 'async request has some error!!!' + err);
// 	} else {
// 		printMsg(true, 1, 'Async has been worked successfully & output is: ' + result);	
// 	}
	
// }


// Async using parallel
// async.parallel([add, sub], result);

// function add(cb) {
// 	setTimeout(function(err, result) {
// 		if(err) {
// 			cb(new Error(err));
// 			return;
// 		}
// 		cb(null, 1+1);
// 	}, 1000);
// }


// function sub(cb) {
// 	setTimeout(function(err, result) {
// 		if(err) {
// 			cb(new Error(err));
// 			return;
// 		}
// 		cb(null, 10-4);
// 	}, 1000);
// }

// function result(err, result) {
// 	if(err) {
// 		printMsg(false, 'Error: '+ err);
// 	} else {
// 		printMsg(true, 0, result);
// 		emitter.emit('emitted', result);
// 	}
// }


// Event Emitter.
// emitter.on('emitted', notifyUser);

// function notifyUser(result) {
// 	console.log('hello, event has been emitted! ' + 'Addition: ' + result[0] + ' ' + 'Substaction: ' + result[1]);
// }

// Bluebird with fs (file System)

// Asynchronous read
// fileSystem.readFile('test.txt', function(err, data) {
// 	console.log('========Asynchronous File Read========');
// 	if(err) {
// 		printMsg(false, 0,err);
// 		return;
// 	}
// 	printMsg(true, 1, data);
// })

// fileSystem.readFileAsync('test.txt')
// 	.then(function(data) {
// 		printMsg(true, 1, data);
// 	})
// 	.then(function(data) {
// 		console.log('Step 1');
// 		return new Promise(function(resolve, reject) {
// 			reject('error');
// 		})
// 	})
// 	.then(function(data) {
// 		console.log('Step 2');
// 	})
// 	.then(function(data) {
// 		console.log('Step 3');
// 	})
// 	.catch(function(err) {
// 		console.log(err);
// 	})


// // Synchronous read
// try {
// 	var file = fileSystem.readFileSync('test.txt');
// 	console.log('========Synchronous File Read========');
// 	printMsg(true, 1, file);
// } catch(e) {
// 	console.log(e);
// }



// function printMsg(status, isFile, msgData) {
// 	console.log('\n-----------------------------------------------');
// 	if(status) {
// 		if(isFile) {
// 			console.log(msgData.toString());		
// 		} else {
// 			console.log(msgData);	
// 		}
// 	}
// 	console.log('-----------------------------------------------\n');
// }

