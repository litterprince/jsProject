$(function(){
	$('.del').bind('click', function(){
		var id = $(this).attr('data-id');
		$("#delSubmit").attr('item-id', id);
	})
	$('#delSubmit').bind('click', function(){
		var id = $(this).attr('item-id');
		var tr = $('.item-id-'+id);
		$.ajax({
			url: '/movie/del',
			type: 'post',
			data: 'id='+id,
			success:function(data){
				if(data.status == 1){
					if(tr.length > 0){
						tr.remove();
						$('#delModal').modal('hide')
					}
				}else{
					alert('删除失败！')
				}
			},
			error:function(err){
				console.log(err);
			}
		});
	})
})