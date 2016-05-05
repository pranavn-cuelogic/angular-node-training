describe('Base controller test cases', function() {

    // beforeEach(module('ui.router'));
    beforeEach(module('ui.router', 'base'));

    var $controller, BaseController;
    var $scope = {};

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        BaseController = $controller('baseController', { $scope: $scope });
    }));

    describe('Base Controller', function() {
        it('should exists', function() {
            expect(BaseController).toBeDefined();
        });
    });

});
