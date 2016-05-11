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
				"gender": 0,
			},{
				"id": 1,
				"name": "John",
				"address": "Developer",
				"email": "john@yopmail.com",
				"age": 24,
				"gender": 0,
			},{
				"id": 2,
				"name": "Genesis",
				"address": "Developer",
				"email": "genesis@yopmail.com",
				"age": 21,
				"gender": 1,
			},{
				"id": 3,
				"name": "Anna",
				"address": "Developer",
				"email": "anna@yopmail.com",
				"age": 23,
				"gender": 1,
			}]
		};

	employee.getEmployeeList 	= getEmployeeList;
	employee.getEmployee 		= getEmployee;
	employee.addEmployee 		= addEmployee;
	employee.updateEmployeeList = updateEmployeeList;
	employee.deleteEmployee 	= deleteEmployee;

	return employee;

	function getEmployeeList() {
		return employeeList = employeeList;
	}

	function getEmployee(id) {
		if(id != null) {
			return employeeList.employeeDetails[id];
		}
	}

	function addEmployee(data) {
		if(data != null) {
			var empList = employeeList.employeeDetails;
			empList.push(data);
			return empList;
		}
		return false;
	}

	function updateEmployeeList(id, data) {
		var empList = employeeList.employeeDetails;
		if(id != null && data != null) {
			empList.splice(id, 1);
			empList.push(data);
			return empList;
		} 
		return false;
	}

	function deleteEmployee(id) {
		var empList = employeeList.employeeDetails;
        if (id != null) {
        	empList.splice(id, 1);
        	console.log(empList);
        	return empList;
        }
        return false;
    }
};
