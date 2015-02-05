var app = angular.module('flapperNews', ['ui.router']);

app.factory('posts',[function(){
	var origin = {
		post: []
	};
	return origin;
}]);

app.controller('MainCtrl',[
	'$scope',
	'posts',
	function($scope, posts){
		$scope.posts = posts.posts;
		$scope.posts = [
		  {title: 'post 1', upvotes: 5},
		  {title: 'post 2', upvotes: 2},
		  {title: 'post 3', upvotes: 15},
		  {title: 'post 4', upvotes: 9},
		  {title: 'post 5', upvotes: 4}
		];
		$scope.test = "Hello world??!!?";
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === ''){return;}
			this.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0
			});
			this.title = '';
			this.link = '';
		};
		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};
	}]);