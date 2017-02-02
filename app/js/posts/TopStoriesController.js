function TopStoriesController(posts) {
  var POSTS_PER_PAGE = 30

  var ctrl = this;
  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = ctrl.totalPosts / POSTS_PER_PAGE;

  ctrl.paginatePosts = function () {
    ctrl.posts =  posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE);
  }

  ctrl.previousPage = function () {
    ctrl.page--;
    ctrl.paginatePosts();
  }

  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.paginatePosts();
  }

  ctrl.firstPage = function () {
    ctrl.page = 1;
    ctrl.paginatePosts();
  }

  ctrl.lastPage = function () {
    ctrl.page = ctrl.totalPages - 1;
    ctrl.paginatePosts();
  }

  ctrl.paginatePosts();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)
