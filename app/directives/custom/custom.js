var app = angular.module('custom.directive', []);

app.directive("ngConfirmClick", function() {
    return {
        link: function (scope, element, attr) {
            var msg = attr.ngConfirmClick || "Are you sure?";
            var clickAction = attr.confirmedClick;
            element.bind('click',function (event) {
                if ( window.confirm(msg) ) {
                    scope.delBtnTxt = 'Deleting...';
                    scope.isDisabled = true;
                    scope.$digest();
                    scope.$eval(clickAction)
                }
            });
        }
    };
});

app.directive("ngSaveUser", function() {
    return {
        link: function (scope, element, attr) {
            var clickAction = attr.saveUser;
            element.bind('click',function (event) {
                if(scope.userinfo.$valid) {
                    scope.saveBtnTxt = 'Saving...';
                    scope.isDisabled = true;
                    scope.$eval(clickAction)
                }
            });
        }
    };
});