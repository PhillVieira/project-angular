angular.module('cardapioApp', ['ngRoute', 'ngResource'])
        .controller("pratoController", function ($scope, $http, PratoService) {
            $scope.pratoData = {};
            $scope.pedidos = new Array();
            $scope.total = 0;
            // loading variable to show the spinning loading icon
            $scope.loading = true;

            $scope.removePedido = function (id) {
                for (var i = 0; i < $scope.pedidos.length; i++) {
                    if ($scope.pedidos[i].id === id) {
                        $scope.total -= $scope.pedidos[i].valor;
                        if ($scope.pedidos[i].qtd > 1) {
                            $scope.pedidos[i].qtd--;
                        } else {
                            $scope.pedidos.splice(i);
                        }
                    }
                }
            };

            $scope.addPedido = function (prato) {
                console.log(prato);

                var exist = false;
                for (var i = 0; i < $scope.pedidos.length; i++) {
                    if ($scope.pedidos[i].id === prato.id) {
                        $scope.pedidos[i].qtd++;
                        console.table($scope.pedidos[i]);
                        exist = true;
                    }
                }
                if (exist === false) {
                    prato.qtd = 1;
                    $scope.pedidos.push(prato);
                }
                $scope.total += parseFloat(prato.valor);
                $scope.total.toFixed(4);
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
                            $('#msg').show();
                            $('#msg').addClass('msgSuccess');
                            $('#msg').html('Prato salvo com sucesso !');
                            // if successful, we'll need to refresh the comment list
                            PratoService.get()
                                    .success(function (getData) {

                                        $('#msg').fadeOut(2000, function () {
                                            $('#msg').removeClass('msgErro');
                                            $('#msg').removeClass('msgSuccess');

                                        });
                                        $scope.pratos = getData;
                                        $scope.loading = false;

                                    });

                        })
                        .error(function (data) {
                            $('#msg').addClass('msgErro');
                            $('#msg').html('Erro ao salvar prato.');
                        });
            };

            // function to handle deleting a comment
            // DELETE A COMMENT ====================================================
            $scope.deletePrato = function (id) {
                $scope.loading = true;

                // use the function we created in our service
                PratoService.destroy(id)
                        .success(function (data) {
                            $('#msg').show();
                            $('#msg').addClass('msgSuccess');
                            $('#msg').html('Prato deletado com sucesso !');
                            // if successful, we'll need to refresh the comment list
                            PratoService.get()
                                    .success(function (getData) {
                                        $('#msg').fadeOut(2000, function () {
                                            $('#msg').removeClass('msgErro');
                                            $('#msg').removeClass('msgSuccess');
                                        });
                                        $scope.pratos = getData;
                                        $scope.loading = false;
                                    });

                        });
            };
        });

