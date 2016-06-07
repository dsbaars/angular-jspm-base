export default angular
  .module('app.config', [])
  .config(['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
}]);
