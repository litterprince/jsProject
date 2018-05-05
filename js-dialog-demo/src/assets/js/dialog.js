define(['jquery'], function($){
	function Dialog(){
		this.option = {
			width: 500,
			height: 300,
			title:'提示',
			content: '',
			handle: null
		};
	}

	Dialog.prototype = {
		alert: function(option){
			option = $.extend(this.option, option);
			var $dom = $('<div class="dialog_boundingBox">'+
					'<div class="dialog_header">'+option.title+'</div>'+
					'<div class="dialog_body">'+option.content+'</div>'+
					'<div class="dialog_footer">'+
						'<input type="button" class="dialog_boundingBox_close" value="关闭" />'+
					'</div>'+
				'</div>');
			$dom.appendTo("body");
			$dom.css({
				"width": this.option.width + 'px',
				"height": this.option.height + 'px',
				"top":  (this.option.top || (window.innerHeight-this.option.height)/2) + 'px',
				"left": (this.option.left || (window.innerWidth-this.option.width)/2) + 'px'
			})
			var $button = $dom.find('.dialog_boundingBox_close');
			$button.click(function(){
				option.handle && typeof option.handle === 'Function' && option.handle();
				$dom.remove();
			});
			$dom.blur(function(){
				alert(123)
			})
		},
		confirm: function(){},
		prompt: function(){}
	}

	return {
		Dialog: Dialog
	}
})