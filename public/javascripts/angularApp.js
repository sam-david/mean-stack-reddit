var app = angular.module('flapperNews', ['ui.router']);

app.factory('posts', [function(){
	var origin = {
		post: []
	};
	return origin;
}]);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'MainCtrl'
			});
		$stateProvider
			.state('posts', {
			  url: '/posts/{id}',
			  templateUrl: '/posts.html',
			  controller: 'PostsCtrl'
			});
		$urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl',[
	'$scope',
	'posts',
	function($scope, posts){
		$scope.posts = posts.post;
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === ''){return;}
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0,
				comments: [
					{author: 'Joe', body: 'Cool post!', upvotes: 0},
			    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
				]
			});
			$scope.title = '';
			$scope.link = '';
		};
		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};

}]);

app.controller('PostsCtrl', [
	'$scope',
	'$log',
	'$stateParams',
	'posts',
	function($scope, $log, $stateParams, posts){
		$scope.$log = $log;

		$scope.post = posts.post[$stateParams.id];
		$scope.addComment = function(){
			$log.log($scope.post);
			$log.log($stateParams.id);
			$log.log(posts.post.comments);
		  if($scope.body === '') { return; }
		  $scope.post.comments.push({
		    body: $scope.body,
		    author: 'user',
		    upvotes: 0
		  });
		  $scope.body = '';
		};

}]);