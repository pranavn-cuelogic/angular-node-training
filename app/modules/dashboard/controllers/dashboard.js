(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$scope', '$state', 'dashboardService', 'employeeService', dashboardController]);

    function dashboardController($scope, $state, dashboardService, employeeService) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';

        $scope.userList = function() {
            //calling API and get user list
            $scope.getUsers = dashboardService.getUserList().userDetails;
            $scope.getEmployees = employeeService.getEmployeeList().employeeDetails;
            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
        }
    }

})();
