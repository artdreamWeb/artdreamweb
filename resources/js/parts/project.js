$(document).ready(function(){

	var	$activityList= $('.ad-pro #activity .newslist');
	$activityList.on('click', '.news-container', function(event) {
		var $news = $(event.currentTarget);
		var newsId = parseInt($news.attr('id').replace(/news/, ''));
		window.location.href="/news/"+newsId;
	});

	var	$activityMore= $('.ad-pro #activity .btn');
	$activityMore.on('click', function(event) {
		window.location.href="/newslist/p1";
	});

});