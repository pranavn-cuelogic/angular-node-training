angular.module('dashboard.service', [])
    .factory('dashboardService', ['$http', dashboardService]);


function dashboardService($http) {
    var service = {};

    service.getUserList = getUserList;

    return service;

    function getUserList() {
        var userList = {};

        return userList = {
            "userDetails": [{
                "id": 0,
                "name": "Prasanna",
                "department": "Developer",
                "salary": 1000,
                "image": "http://cache4.asset-cache.net/fk/176794537.jpg?v=1&c=IWSAsset&k=1&f=2&d=4575EEE0F3AA8377CD9D0036C287379E479DFF9E20496F56146E8D247CE15381",
                "username": "prasanna@yopmail.com",
                "password": "123456"
            },{
                "id": 1,
                "name": "Ayush",
                "department": "I.T",
                "salary": 1000,
                "image": "resource/images/IMG_3050.JPG",
                "username": "ayush@yopmail.com",
                "password": "123456"
            }, {
                "id": 2,
                "name": "Bobo",
                "department": "Project manager",
                "salary": 100000,
                "image": "resource/images/textures-selection-nice-high-resolution_2165080.jpg",
                "username": "bobo@yopmail.com",
                "password": "123456"
            }, {
                "id": 3,
                "name": "Baby",
                "department": "developer",
                "salary": 2000,
                "image": "resource/images/404.png",
                "username": "baby@yopmail.com",
                "password": "123456"
            }, {
                "id": 4,
                "name": "Nilesh",
                "department": "Designer",
                "salary": 5500,
                "image": "resource/images/6309_1280x800.jpg",
                "username": "nilesh@yopmail.com",
                "password": "123456"
            }, {
                "id": 5,
                "name": "amol",
                "department": "Manager",
                "salary": 100500,
                "image": "resource/images/brand-avatar.jpg",
                "username": "amol@yopmail.com",
                "password": "123456"
            }, {
                "id": 6,
                "name": "ganesh",
                "department": "Accountant",
                "salary": 1000,
                "image": "resource/images/ipgeo.png",
                "username": "ganesh@yopmail.com",
                "password": "123456"
            }]
        }
    }
    //END
};
