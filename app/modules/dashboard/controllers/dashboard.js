(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$rootScope', '$scope', '$state', 'dashboardService', 'employeeService', dashboardController]);

    function dashboardController($rootScope, $scope, $state, dashboardService, employeeService) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';

        $scope.userList = function() {
            //calling API and get user list
            $scope.getUsers = dashboardService.getUserList().userDetails;
            console.log($rootScope);
            if($rootScope.employeeArr.length <= 0){
                console.log('true');
                $scope.getEmployees = employeeService.getEmployeeList().employeeDetails;
            } else {
                $scope.getEmployees = $rootScope.employeeArr;
                console.log('false');
            }
            
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
