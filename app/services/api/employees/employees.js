angular.module('employee.service', [])
	.factory('employeeService', ['$http', employeeService]);


function employeeService($http) {
	var employee = {};
	employeeList = {
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
		};

	employee.getEmployeeList = getEmployeeList;
	employee.getEmployee = getEmployee;
	employee.updateEmployeeList = updateEmployeeList;
	employee.deleteEmployee = deleteEmployee;

	return employee;

	function getEmployeeList() {
		return employeeList = employeeList;
	}

	function getEmployee(id) {
		if(id != null) {
			return employeeList.employeeDetails[id - 1];
		}
		
	}

	function updateEmployeeList(id, data) {
		var empList = employeeList.employeeDetails;
		if(id != null && data != null) {
			empList.splice(id - 1, 1);
			empList.push(data);
			return empList;
		} 
		return false;
	}

	function deleteEmployee(id) {
		var empList = employeeList.employeeDetails;
		if(id != null) {
			empList.splice(id, 1);
			return empList;
		} 
		return false;
	}
};
