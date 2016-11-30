'use strict';
// Define the `phonecatApp` module
var app = angular.module('angularApp', ['ngResource','ngRoute','listView']);

app.config(function($routeProvider){
});

app.controller('MainController', function($scope){
  var stringUser = localStorage.getItem('stringUser');
  if (stringUser) {
    var user = JSON.parse(stringUser);
    $scope.usuario = user.name;
  }
});


app.controller('NavBarController', function($scope){
  $scope.navLogin = '<li><a href="login.html">Login</a></li>';
  $scope.logout = "<li><a href='#' ng-click='logOutFn'>LogOut</a></li>"
  var stringUser = localStorage.getItem('stringUser');
  if (stringUser) {
    var user = JSON.parse(stringUser);
    $scope.usuario = user.name;
    $scope.navLogin = '';
  }else{
    $scope.logout = "";
  }

  $scope.logOutFn = function(){
    localStorage.setItem('stringUser','');
    // $.mobile.changePage( "index.html", { transition: "slideup", changeHash: false } );
    window.location = '/';
  };
});


app.controller('LoginController', function($scope){
  var stringUser = localStorage.getItem('stringUser');
  if (stringUser) {
    var user = JSON.parse(stringUser);
    $scope.usuario = user.name;
    window.location = '/';
  }
    $scope.submit = function(){
      console.log('submit');
      var email = $scope.email;
      var password = $scope.password;

      userLogin(email,password);

      // if (email=='jnandezp@gmail.com' && password=='123123') {
      //   window.location = '/';
      // }else{
      //   alert('error al tratar de loguearse');
      // }
    }
});
