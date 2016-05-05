describe('User test cases', function() {

    beforeEach(module('ui.router', 'user'));

    var $controller, userController;
    var $scope = {};

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        userController = $controller('userController', { $scope: $scope });
    }));

    describe('User Controller', function() {
        it('should exists', function() {
            expect(userController).toBeDefined();
        });
    });

});
