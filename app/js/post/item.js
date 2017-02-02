var item = {
  templateUrl: 'js/post/item.html',
  bindings: {
    id: '='
  },
  controller: function ($scope, PostsService) {
    var ctrl = this;
    var id = $scope.$parent.post;

    PostsService.getPost(id)
      .then(function(response) {
        ctrl.data = response.data;
      })
  },
  controllerAs: 'item'
}

angular
  .module('app')
  .component('item', item)
