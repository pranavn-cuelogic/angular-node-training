'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$rootScope', '$scope', '$stateParams', '$state', 'employeeService', userController]);

    function userController($rootScope, $scope, $stateParams, $state, employeeService) {
        $scope.user_id = $stateParams.user_id;
        $scope.is_edit = ($scope.user_id != null) ? true : false;
        $scope.setTitle = ($scope.is_edit) ? 'Edit user' : 'Add User';
        $scope.getEmployees = ($scope.is_edit) ? employeeService.getEmployee($scope.user_id) : null;
        $scope.copyData = angular.copy($scope.getEmployees);
        $scope.userInfo = function() {
        	if($scope.is_edit)
        	var userArr =  {
        		'name': $scope.getEmployees.name,
        		'address': $scope.getEmployees.address,
        		'email': $scope.getEmployees.email,
        		'age': $scope.getEmployees.age,
        		'gender': $scope.getEmployees.gender,
        	};
        $scope.updateUser = employeeService.updateEmployeeList($scope.user_id, userArr).employeeDetails;
        $state.transitionTo('base.dashboard');
        };

        // $scope.cancelEdit = function() {
        // 	console.log($scope.getEmployees);
        // 	$scope.getEmployees = $scope.copyData;
        // 	$state.transitionTo('edit/'+$scope.user_id);
        // 	return false;
        // }


        
    }

})();
