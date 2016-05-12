angular.module('filters', [])
    .filter("getGender", function() {
        return function(data) {
            var res = (data == 0) ? "Male" : "Female";
            return res;
        }
    })
    .filter('customSearch', function() {
        return function(data) {
            console.log(data);
            angular.forEach(data, function(item) {
                console.log(item);
            });
        }
    });




