// servico do tipo provider
angular.module("listaTelefonica").provider("serialGenerator", function () {
  var _length = 10;

  this.getLength = function () {
    return _length;
  };

  this.setLength = function (length) {
    _length = length;
  }

  this.$get = function () {
    return {
      generate: function () {
        var serial = "";
        while (serial.length < _length) {
          var randomNumber = (Math.random() * 64) + 32;
          var randomNumberInteger = Math.floor(randomNumber);
          serial += String.fromCharCode(randomNumberInteger);
        }
        return serial;
      }
    };
  };
});