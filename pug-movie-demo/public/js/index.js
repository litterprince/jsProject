// 标签 搜索 分页
$(function(){
	var params = JSON.parse($('#params').val() || {});

	$('#pageList a').each(function(){
		var page = $(this).data('id');
		var href = '/?params[page]='+page;
		if(params.catId)
			href += '&params[catId]='+params.catId;
		if(params.movieName)
			href += '&params[movieName]='+params.movieName;
		$(this).attr('href', href);
	})
})