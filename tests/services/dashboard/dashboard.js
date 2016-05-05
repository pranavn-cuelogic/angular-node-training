describe('Dashboard service test cases', function() {

    beforeEach(module('dashboard.service'));

    var testDashboardService;

    it('should contain an dashboardService service', inject(function(dashboardService, _$httpBackend_) {
        testDashboardService = dashboardService;
        expect(dashboardService).toBeDefined();
    }));

});
