// definicao do controller e especificacao do escopo
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, serialGenerator) {
  $scope.app = "Lista Telefônica";

  $scope.contatos = contatos.data || [];

  var generateSerialInContatos = function (contatos) {
    contatos.length > 0 && contatos.forEach(contato => {
      contato.serial = serialGenerator.generate()
    });
  };

  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
  };

  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  generateSerialInContatos($scope.contatos);
});