angular.module('cardapioApp', ['ngRoute', 'ngResource'])
        .controller("pratoController", function ($scope, $http, PratoService) {
            $scope.pratoData = {};
            $scope.pedidos = new Array();
            $scope.total = 0;
            // loading variable to show the spinning loading icon
            $scope.loading = true;

            $scope.addPedido = function (prato) {
                console.log(prato);
                
                $scope.pedidos.push(prato);
                $scope.total += parseFloat(prato.valor);
            };
            PratoService.get().success(function (data) {

                $scope.pratos = data;
               
                $scope.loading = false;
            });

            // function to handle submitting the form
            // SAVE A COMMENT ======================================================
            $scope.addPrato = function () {

                $scope.loading = true;

                // save the comment. pass in comment data from the form
                // use the function we created in our service
                PratoService.save($scope.pratoData)
                        .success(function (data) {

                            // if successful, we'll need to refresh the comment list
                            PratoService.get()
                                    .success(function (getData) {
                                        $scope.pratos = getData;
                                        $scope.loading = false;
                                    });

                        })
                        .error(function (data) {
                           
                        });
            };

            // function to handle deleting a comment
            // DELETE A COMMENT ====================================================
            $scope.deletePrato = function (id) {
                $scope.loading = true;

                // use the function we created in our service
                PratoService.destroy(id)
                        .success(function (data) {

                            // if successful, we'll need to refresh the comment list
                            PratoService.get()
                                    .success(function (getData) {
                                        $scope.pratos = getData;
                                        $scope.loading = false;
                                    });

                        });
            };
        });

