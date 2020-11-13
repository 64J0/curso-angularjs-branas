// definicao do controller e especificacao do escopo
angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, contatosAPI, serialGenerator, operadoras, $filter) {
  $scope.app = "Lista Telefônica - Adicionar";

  $scope.operadoras = $filter('orderBy')(operadoras.data, 'nome') || [];

  $scope.adicionarContato = function (contato) {
    contato.serial = serialGenerator.generate();
    contato.data = new Date();
    contatosAPI.saveContato(contato)
      .then(function () {
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        $location.path("/contatos");
      });
  };
});