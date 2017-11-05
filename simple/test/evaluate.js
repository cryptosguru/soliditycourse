
var executors = require('../lib/executors');

exports['evaluate true'] = function (test) {
	var executor = executors.executor();
	
	test.async();
	
	executor.execute('evaluate true', function (err, data) {
		test.ok(!err);
		test.ok(data === true);
		test.ok(executor.value() === true);
		test.done();
	});
}

exports['evaluate false'] = function (test) {
	var executor = executors.executor();
	
	test.async();
	
	executor.execute('evaluate false', function (err, data) {
		test.ok(!err);
		test.ok(data === false);
		test.ok(executor.value() === false);
		test.done();
	});
}

exports['evaluate comparison'] = function (test) {
	var executor = executors.executor();
	
	test.async();
	
	executor.execute('evaluate 1 > 0', function (err, data) {
		test.ok(!err);
		test.ok(data === true);
		test.ok(executor.value() === true);
		test.done();
	});
}

exports['evaluate false comparison'] = function (test) {
	var executor = executors.executor();
	
	test.async();
	
	executor.execute('evaluate 1 > 2', function (err, data) {
		test.ok(!err);
		test.ok(data === false);
		test.ok(executor.value() === false);
		test.done();
	});
}

exports['evaluate comparison without spaces'] = function (test) {
	var executor = executors.executor();
	
	test.async();
	
	executor.execute('evaluate 1>0', function (err, data) {
		test.ok(!err);
		test.ok(data === true);
		test.ok(executor.value() === true);
		test.done();
	});
}

exports['evaluate value'] = function (test) {
	var executor = executors.executor();
	
	test.async();
	
	executor.execute(['evaluate 1 + 2', 'evaluate value'], function (err, data) {
		test.ok(!err);
		test.ok(data === 3);
		test.ok(executor.value() === 3);
		test.done();
	});
}
