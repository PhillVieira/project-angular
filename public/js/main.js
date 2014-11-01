var app = angular.module('cardapio', ['ngResource']);
app.controller("CadastraController", function ($scope,$resource) {
    $scope.pratos = [];
    $scope.addPrato = function () {
       $scope.pratos.push($scope.prato);
    };
    
});

