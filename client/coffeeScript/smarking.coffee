
app = angular.module('smarkingApp', [])
app.controller 'smarkingCtrl', ($scope) ->
  $scope.data = [[300
        400
        300]
        [250
        300
        250]]  
  return
  
app.directive 'bars', ($parse) ->
  {
    restrict: 'E'
    replace: true
    template: '<div id="chart"></div>'
    link: (scope, element, attrs) ->
      data = attrs.data.split(',')
      chart = d3.select('#chart').append('div').attr('class', 'chart').selectAll('div').data(data).enter().append('div').transition().ease('elastic').style('width', (d) ->
        d + '%'
      ).text((d) ->
        d + '%'
      )
      return

  }
