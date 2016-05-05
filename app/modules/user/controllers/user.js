'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$scope', userController]);

    function userController($scope) {
        $scope.setTitle = 'Add user';
    }

})();
