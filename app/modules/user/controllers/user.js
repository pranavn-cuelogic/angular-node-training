'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$rootScope', '$scope', '$stateParams', '$state', 'employeeService', userController]);

    function userController($rootScope, $scope, $stateParams, $state, employeeService) {
        $scope.user_id = $stateParams.user_id;
        var is_edit = ($scope.user_id != null) ? true : false;
        $scope.setTitle = (is_edit) ? 'Edit user' : 'Add User';
        $scope.getEmployees = (is_edit) ? employeeService.getEmployee($scope.user_id) : null;
        $scope.copyData = (is_edit) ? angular.copy($scope.getEmployees) : null;
        $scope.userInfo = function() {
            var userArr =  {
                'name': $scope.getEmployees.name,
                'address': $scope.getEmployees.address,
                'email': $scope.getEmployees.email,
                'age': $scope.getEmployees.age,
                'gender': $scope.getEmployees.gender,
            };
        	if(is_edit) {
                userArr['id'] = $scope.user_id;
                $scope.updateUser = employeeService.updateEmployeeList($scope.user_id, userArr).employeeDetails;
            } else {
                userArr['id'] = parseInt(employeeService.getEmployeeList().employeeDetails.length);
                $scope.updateUser = employeeService.addEmployee(userArr).employeeDetails;
            }

        $state.transitionTo('base.dashboard');
        };

        $scope.cancelEdit = function() {
        	$scope.getEmployees = angular.copy($scope.copyData);
        };
    }

})();
