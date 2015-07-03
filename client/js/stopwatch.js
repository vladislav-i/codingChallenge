var stopWatch = angular.module('watchApp', []);
stopWatch.controller('watchController', function($scope, $interval) {
  var countTime =0, timer;
  //disable reset button at start
  $scope.resetDisable = true;
  $scope.stopDisable = true;
  $scope.time = countTime;
  //get current time, take currentTime and subtractStartTime
  //current time will be updated by $interval in angularjs
  $scope.start = function(){
    //disable/enable buttons
    $scope.startDisable = true;
    $scope.stopDisable = false;
    $scope.resetDisable = false;

    //start timer
    var startTime= new Date().getTime();
    timer=$interval(function() {
      var currentTime = new Date().getTime();
      countTime= currentTime - startTime;
      $scope.time += countTime;
    }, 40);
  };

  $scope.stop = function(){
    //disable/enable buttons
    $scope.startDisable = false;
    $scope.stopDisable = true;
    //stop interval
    $interval.cancel(timer);
  };

  $scope.reset = function(){
      countTime = 0;
      $scope.time = countTime;
      $scope.resetDisable = true;
  }

  $scope.log = function(){
    console.log($scope.time);
  };
  
});