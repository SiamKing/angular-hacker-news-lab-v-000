function PostController(post) {
  this.post = post.data;
}

angular
  .module('app')
  .controller('PostController', PostController)
