function PostsService($http) {

  var url = 'https://hacker-news.firebaseio.com/v0/';

  this.getTopStories = function () {
    return $http.get(url + 'topstories.json');
  };

  this.getPost = function (id) {
    return $http.get(url + '/item/' + id + '.json');
  };

}

angular
  .module('app')
  .service('PostsService', PostsService)
