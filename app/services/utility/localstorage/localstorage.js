'use strict';

angular.module('localStorage.service', ['LocalStorageModule'])
    .service('localStorageServiceWrapper', ['localStorageService', localStorageServiceWrapper]);

function localStorageServiceWrapper(localStorageService) {

    var service = {};

    function set(strName, strSetValue) {
        return localStorageService.set(strName, strSetValue);
    }

    function get(strGetName) {
        return localStorageService.get(strGetName);
    }

    function isSupported() {
        return localStorageService.isSupported;
    }

    function clearAll() {
        return localStorageService.clearAll();
    }

    service.set = set;
    service.get = get;
    service.isSupported = isSupported;
    service.clearAll = clearAll;

    return service;

};
