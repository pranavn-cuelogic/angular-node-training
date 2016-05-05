angular.module('menu.service', [])
    .factory('menuService', ['$http', menuService]);



function menuService($http) {
    var service = {};

    service.getSidebarMenuList = getSidebarMenuList;

    return service;

    function getSidebarMenuList() {
        var menus = {};
        return menus = {
            "userMenu": [{
                "name": "Dashboard",
                "class": "dashboard",
                "action": "base.dashboard",
            }, {
                "name": "Proposals",
                "class": "proposals",
                "action": "base.dashboard",
            }, {
                "name": "Project",
                "class": "project",
                "action": "base.dashboard",
            }, {
                "name": "Data Mapping",
                "class": "data-mapping",
                "action": "base.dashboard",
            }, {
                "name": "Clients",
                "class": "clients",
                "action": "base.dashboard",
            }, {
                "name": "Data Providers",
                "class": "data-providers",
                "action": "base.dashboard",
            }]
        }
    }
    //END
};
