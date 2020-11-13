# Curso de AngularJS - Rodrigo Branas

Este repositório contém os códigos desenvolvidos ao longo do curso de AngularJS ou Angular 1 ministrado pelo Rodrigo Branas e disponibilizado no YouTube encontrada no canal do mesmo e referenciada posteriormente neste documento na seção de Referências.

O AngularJS é um framework front-end utilizado para facilitar o desenvolvimento das aplicações WEB seguindo o padrão MVC (Model View Controller) que foi suportado em seus tempos áureos pela equipe de desenvolvimento do Google.

Embora o projeto inicial tenha sido descontinuado no final de 2016 muitas aplicações encontradas atualmente continuam a utilizar em seu core esta ferramenta, portanto o conhecimento do seu funcionamento é de vital importância para dar manutenção e entender os códigos já desenvolvidos em algumas empresas.

Mantra:

```bash
# Nós devemos evitar ler o escopo diretamente por meio do Controller 
# e devemos evitar escrever no scope por meio da View.
```

Algumas definições e informações do universo do AngularJS:

* **Módulo:** Um módulo é uma coleção de componentes, ou seja, um conjunto de controllers, directives, filters, services, entre outros tipos de componente utilizados pela aplicação.
* Na primeira vez que um template é carregado, ele é armazenado em cache e acessível por meio do serviço $templateCache.
* **Single-Page Application:** É uma aplicação que realiza suas transições dentro de uma mesma página, carregando seus componentes de forma dinâmica utilizando AJAX.
* **Route object:** Objeto de configuração de cada rota, permite configurar diversos aspectos do roteamento.
* **Interceptor:** Um interceptor é um tipo de serviço que permite a interceptação das requisições e respostas do serviço $http.
* Causas de baixa performance: Excesso de interação com a DOM e principalmente desperdício de tempo processando coisas desnecessárias, por conta da forma como o ciclo de notificação do framework, também conhecido como *digest cycle*, funciona.
* Cuidado com as expressions que utilizam funções.
* Opte pelo *one-time bind* sempre que fizer sentido, desta forma diminuindo a quantidade de *watchers* e o tempo de carregamento da página.
* Mude o comportamento padrão com o *ng-model-options*.
* Sempre defina o track by quando utilizar *ng-repeat* e *ng-options*.
* Analise o impacto de aplicar os filtros diretamente na view.
* Pense bem antes de utilizar ng-if (controla realmente o que será renderizado) ou ng-show (muda apenas a propriedade css).

Exemplo de requisição de pasta:

* *http://127.0.0.1:5500/index.html#/contatos*

## Como executar:

```bash
# 1. clonar o repositorio
$ git clone <link>

# 2. entrar na pasta com o codigo
$ cd curso-angularjs-branas/

# 3. instalar dependencias
$ npm install

# 4. entrar na pasta do backend
$ cd backend/

# 5. iniciar o servidor
$ node contatosBackend.js

# 6. abrir o index.html no navegador
# podem ocorrer problemas de CORS
# para resolver isso deve ser servido o 
# index.html a partir de um servidor
# por exemplo o Live Server do VS Code
```

## Referências:

* [Playlist do YouTube](https://www.youtube.com/watch?v=_y7rKxqPoyg&list=PLQCmSnNFVYnTD5p2fR4EXmtlR6jQJMbPb)

---
Vinícius Gajo Marques Oliveira, 2020