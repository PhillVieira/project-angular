
angular.module('cardapioApp')

        .factory('PratoService', function ($http) {

            return {
                // get all the pratos
                get: function () {
                    return $http.get('/project-angular/back/public/prato');
                },
                // save a prato (pass in prato data)
                save: function (pratoData) {
                    console.table(pratoData);
                    return $http({
                        method: 'POST',
                        url: '/project-angular/back/public/prato',
                        data: {'nome':pratoData.nome,'valor':pratoData.valor,'desc':pratoData.desc}
                        
                    });
                },
                // destroy a comment
                destroy: function (id) {
                    return $http.delete('/project-angular/back/public/prato/' + id);
                }
            };

        });