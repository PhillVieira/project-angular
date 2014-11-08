
angular.module('cardapioApp', ['ngRoute'])

        .factory('Prato', function ($http) {

            return {
                // get all the pratos
                get: function () {
                    return $http.get('/project-angular/back/public/prato');
                },
                // save a prato (pass in prato data)
                save: function (pratoData) {
                    return $http({
                        method: 'POST',
                        url: '/project-angular/back/public/prato',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: $.param(pratoData)
                    });
                },
                // destroy a comment
                destroy: function (id) {
                    return $http.delete('/project-angular/back/public/prato/' + id);
                }
            };

        });