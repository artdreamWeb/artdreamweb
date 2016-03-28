$(document).ready(function(){
	var newsCount = 23;
	var newsPageCount = Math.ceil(newsCount/12);

	//新闻详情页
	var $newsd = $('.ad-newsd');
	var	$newsdNav = $newsd.find('.ad-newsd-nav');
	if($newsd.attr('id')){
		var newsdId = parseInt($newsd.attr('id').replace(/news/, ''));
		var $homeBtn = $newsd.find('.ad-newsd-home');
		if(newsdId == newsCount){
			$newsdNav.find('.prev>.btn').hide();
		}
		if(newsdId == 1){
			$newsdNav.find('.next>.btn').hide();
		}
		$newsdNav.on('click', '.prev', function() {
			window.location.href="/news/"+(newsdId+1);
		});
		$newsdNav.on('click', '.next', function() {
			window.location.href="/news/"+(newsdId-1);
		});
		$homeBtn.on('click', function() {
			var pageCount = newsPageCount - parseInt(newsdId/12);
			window.location.href="/newslist/p"+pageCount;
		});

	}
	

	//新闻列表页
	var $newsl = $('.ad-newsl');
	var	$newsList= $newsl.find('.ad-newsl-list');
	$newsList.on('click', '.news-container', function(event) {
		var $news = $(event.currentTarget);
		var newsId = parseInt($news.attr('id').replace(/news/, ''));
		window.location.href="/news/"+newsId;
	});
});