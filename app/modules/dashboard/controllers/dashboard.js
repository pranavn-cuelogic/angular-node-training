(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$rootScope', '$scope', '$state', '$window', '$timeout', 'dashboardService', 'employeeService', dashboardController]);

    function dashboardController($rootScope, $scope, $state, $window, $timeout, dashboardService, employeeService) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.sortType     = 'name'; // default sort type
        $scope.sortReverse  = false;  // default sort order
        $scope.search   = '';
        $scope.isRowSelected = false;
        $scope.delBtnTxt = 'Delete Selected';
        $scope.isDisabled = false;
        var user_ids = [];
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
        };

        $scope.deleteUser = function(user_id) {
            employeeService.deleteEmployee(user_id);
            // using $scope.$apply will tell application that an asynchronous event just occurred.
            $scope.$apply();
        };

        $scope.editUser = function(user_id) {
            if(user_id != null) {
                $state.transitionTo('base.edit', {'user_id': user_id});
            }
        }

        $scope.selectRow = function(row_id) {
            if(this.is_backgroundBlue == true) {
                this.is_backgroundBlue = false;
                user_ids.pop(row_id);
            } else {
                this.is_backgroundBlue = true;
                user_ids.push(row_id);
            }

            if(user_ids.length > 0) {
                $scope.isRowSelected = true;
            } else {
                $scope.isRowSelected = false;
            }
        }

        $scope.deleteRows = function() {
            if(user_ids.length > 0) {
                $timeout(function() {
                    angular.forEach(user_ids, function(item){
                        employeeService.deleteEmployee(item);
                    });
                    $scope.isRowSelected = false;
                    $scope.delBtnTxt = 'Delete Selected';
                    $scope.isDisabled = false;
                }, 2000);
                $scope.$apply();
            }
        }
    }

})();
