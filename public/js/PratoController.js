angular.module('cardapioApp',['ngResource','ngRoute'])
        .controller("pratoController", function ($scope, $http, Prato) {
            $scope.pratoData = {};

            // loading variable to show the spinning loading icon
            $scope.loading = true;


            Prato.get().success(function (data) {

                $scope.pratos = data;
                $scope.loading = false;
            });

            // function to handle submitting the form
            // SAVE A COMMENT ======================================================
            $scope.addPrato = function () {
                $scope.loading = true;

                // save the comment. pass in comment data from the form
                // use the function we created in our service
                new Prato().save($scope.pratoData)
                        .success(function (data) {

                            // if successful, we'll need to refresh the comment list
                            Prato.get()
                                    .success(function (getData) {
                                        $scope.pratos = getData;
                                        $scope.loading = false;
                                    });

                        })
                        .error(function (data) {
                            console.log(data);
                        });
            };

            // function to handle deleting a comment
            // DELETE A COMMENT ====================================================
            $scope.deletePrato = function (id) {
                $scope.loading = true;

                // use the function we created in our service
                Prato.destroy(id)
                        .success(function (data) {

                            // if successful, we'll need to refresh the comment list
                            Prato.get()
                                    .success(function (getData) {
                                        $scope.pratos = getData;
                                        $scope.loading = false;
                                    });

                        });
            };
        });

