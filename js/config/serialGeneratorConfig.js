// funciona apenas com servicos provider
angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
  serialGeneratorProvider.setLength(10);
});