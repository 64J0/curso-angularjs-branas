// definicao do controller e especificacao do escopo
angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, contatosAPI, serialGenerator, operadoras) {
  $scope.app = "Lista Telefônica - Adicionar";

  $scope.operadoras = operadoras.data || [];

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