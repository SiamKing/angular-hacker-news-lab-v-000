angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('top', {
      url: '/top',
      templateUrl: 'js/posts/top-stories.html',
      controller: 'TopStoriesController as top',
      resolve: {
        posts: function (PostsService) {
          return PostsService.getTopStories();
        }
      }
    })
    .state('post', {
      url: '/post/:id',
      templateUrl: 'js/post/post.html',
      controller: 'PostController as post',
      resolve: {
        post: function (PostsService, $stateParams) {
          return PostsService.getPost($stateParams.id);
        }
      }
    });
    $urlRouterProvider.otherwise('top');

  }])
