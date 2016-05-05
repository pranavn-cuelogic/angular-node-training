angular.module('sidebarMenu.directive', [])
    .directive("sidebarMenu", sidebarMenu);

function sidebarMenu() {
    return {
        restrict: "E",
        scope: {
            "sidebarMenuList": "="
        },
        templateUrl: "app/directives/menu/views/sidebar-menu.html",
        controller: ['$scope', '$location', function($scope, $location) {

            $scope.subTabMenus = function() {
                var increment = 0;

                angular.forEach($scope.sidebarMenuList, function(menu) {

                    $scope.sidebarMenuList[increment]["activeCls"] = '';

                    if (menu.action == $location.url().replace(/\//g, '')) {
                        $scope.sidebarMenuList[increment]["activeCls"] = 'active';
                    }
                    increment++;
                });
                return $scope.sidebarMenuList;
            };
        }]
    };
}
