angular.module('employee.service', [])
	.factory('employeeService', ['$http', employeeService]);


function employeeService($http) {
	var employee = {};

	employee.getEmployeeList = getEmployeeList;

	return employee;

	function getEmployeeList() {
		var employeeList = {
			"employeeDetails": [{
				"id": 0,
				"name": "Mike",
				"address": "Developer",
				"email": "mike@yopmail.com",
				"age": 25,
				"gender": "Male",
			},{
				"id": 1,
				"name": "John",
				"address": "Developer",
				"email": "john@yopmail.com",
				"age": 24,
				"gender": "Male",
			},{
				"id": 2,
				"name": "Genesis",
				"address": "Developer",
				"email": "genesis@yopmail.com",
				"age": 21,
				"gender": "Female",
			},{
				"id": 3,
				"name": "Anna",
				"address": "Developer",
				"email": "anna@yopmail.com",
				"age": 23,
				"gender": "Female",
			}]
		}

		return employeeList;
	}
};
