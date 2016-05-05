describe('Login controller test cases', function() {

    // beforeEach(module('ui.router'));
    beforeEach(module('ui.router', 'auth'));

    var $controller, LoginController;
    var $scope = {};

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        LoginController = $controller('loginController', { $scope: $scope });
    }));

    describe('Login Controller', function() {
        it('should exists', function() {
            expect(LoginController).toBeDefined();
        });
    });

});
