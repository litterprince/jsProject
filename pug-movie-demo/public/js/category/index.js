$(function(){
	$('.del').bind('click', function(){
		var id = $(this).data('id');
		$('#delSubmit').attr('data-id', id);
	})
	$('#delSubmit').bind('click', function(){
		var id = $(this).data('id');
		var tr = $('.item-id-'+id);
		var ajax = {
			exec: function(){
				$.ajax({
					url: '/category/del',
					type: 'post',
					data: 'id='+id,
					success: function(data){
						if(data.status == 1){
							if(tr.length > 0){
								tr.remove();
								$('#delModal').modal('hide');
							}
						}else{
							alert('删除失败！');
						}
					},
					error: function(err){
						console.log(err);
					}
				})
			}
		}
		ajax.exec();
	})
})