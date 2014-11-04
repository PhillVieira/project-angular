var app = angular.module('cardapio', ['ngResource']);
app.controller("CadastraController", function ($scope, $http) {
    $scope.pratos = [];
    $scope.addPrato = function () {


        $http.post("http://localhost/project-angular/back/public/prato/create",
                {params: {
                        prato: $scope.prato
                    }
                }
        ).success(function (data) {
            console.log(data);
        });

        $scope.pratos.push($scope.prato);

    };

});

