/// <reference path="angular.js" />

var demoApp = angular.module("demoApp", [])
                     .controller("countryController", function ($scope, $http, $location, $anchorScroll) {
                         $http.get("CountryService.asmx/GetData")
                              .then(function (response) {
                                  $scope.contries = response.data;
                              });

                         $scope.scrollTo = function (countryName) {
                             $location.hash(countryName);
                             $anchorScroll();
                         }
                     });