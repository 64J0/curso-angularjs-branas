angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, contato) {
  $scope.contato = contato.data;

  $scope.title = "Detalhes de um contato"
});