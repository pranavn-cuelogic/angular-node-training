angular.module('filters', [])
    .filter("gender", function() {
        return function(data) {
            var res = (data == 0) ? "Male" : "Female";
            console.log(res);
            return res;
        }
    });
    // .filter('customSearch')




