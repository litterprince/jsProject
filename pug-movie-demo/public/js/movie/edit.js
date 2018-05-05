$(function(){
	$('#inputDouban').blur(function(){
		var id = $(this).val();

		$.ajax({
			url: 'https://api.douban.com/v2/movie/subject/'+id,
			type: 'get',
			dataType: 'jsonp',
			jsonp: 'callback',
			success: function(data){
				$('#inputTitle').val(data.title);
				$('#inputDirector').val(data.directors[0].name);
				$('#inputCountry').val(data.countries[0]);
				$('#inputPoster').val(data.images.small);
				$('#inputYear').val(data.year);
				$('#inputSummary').val(data.summary);
			},
			error: function(err){
				console.log(err)
			}
		})
	})
})