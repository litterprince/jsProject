require.config({
	paths:{
		jquery: 'lib/jquery'
	}
});

require(['jquery'], function($){
  var slidebar = $(".slidebar"),
	  mask = $(".mask"),
	  slidebar_trigger = $("#slidebar_trigger"),
	  moreA = $(".more a"),
	  backTop = $(".backTop");

	/*侧边栏事件*/
  slidebar_trigger.bind('click', function(){
  	mask.fadeIn();
  	slidebar.animate({
      'right': 0
    });
  });
  moreA.bind('click', function(){
    mask.fadeIn();
    slidebar.animate({
      'right': 0
    });
  });
  /*遮罩事件*/
  mask.bind('click', function(){
  	mask.fadeOut();
    slidebar.animate({
      'right': '-330px'
    });
  });
  /*返回顶部事件*/
  backTop.bind('click', function(){
  	$('html, body').animate({
      scrollTop: 0
    }, 800)
  });
  /*鼠标滚动事件*/
  $(window).bind('scroll', function(){
  	if($(this).scrollTop() >= $(this).height()){
  		backTop.fadeIn();
  	}else{
  		backTop.fadeOut();
  	}
  })

  $(window).trigger('scroll');
});