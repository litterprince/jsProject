require.config({
	paths:{
		jquery: 'lib/jquery'
	}
})

require(['jquery','dialog'], function($,d){
	var dialog = new d.Dialog;
	$("#a").click(function(){
		var option = {
			title: '标题',
			content: '内容'
		}
		dialog.alert(option);
	})
})