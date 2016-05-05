describe('Dashboard test cases', function() {

    beforeEach(module('ui.router', 'dashboard'));

    var $controller, dashboardController;
    var $scope = {};

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        dashboardController = $controller('dashboardController', { $scope: $scope });
    }));

    describe('Dashboard Controller', function() {
        it('should exists', function() {
            expect(dashboardController).toBeDefined();
        });
    });

});
