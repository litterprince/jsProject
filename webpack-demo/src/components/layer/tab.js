import $ from '../lib/jquery-vendor'

var Tab = function(tab){
    var _this = this;
    this.tab = tab;
    this.config = {
        "triggerType":"click",
        "effect":"default",
        "invoke": 2,
        "auto": false,
        "debug": true,
        "curIndex": 0
    };
    if(this.getConfig()){
        $.extend(this.config, JSON.parse(this.getConfig()));
    }
    this.curIndex = this.config.invoke;
    this.tabItems = this.tab.find('ul.tab-nav li');
    this.contentItems = this.tab.find('div.content-wrap div.content-item');
    var config = this.config;

    let tempIndex = this.curIndex % this.tabItems.length;
    this.tabItems.eq(tempIndex).addClass('actived');
    this.contentItems.eq(tempIndex).addClass('current');

    if(config.triggerType === 'click'){
        this.tabItems.bind(config.triggerType, function(){
            _this.invoke($(this));
        });
    }else if(config.triggerType === 'mouseover'){
        this.tabItems.bind(config.triggerType, function(){
            _this.invoke($(this));
        });
    }

    if(config.auto){
        this.autoPlay();
        this.tabItems.bind('mouseover', ()=>window.clearInterval(this.timer)).bind('mouseout', ()=>this.autoPlay());
        this.contentItems.bind('mouseover', ()=>window.clearInterval(this.timer)).bind('mouseout', ()=>this.autoPlay());
    }
};
Tab.prototype={
    autoPlay:function(){
        this.timer = window.setInterval(()=>{
            let length = this.tabItems.length;
            let curIndex = this.getCurIndex();
            this.invoke(this.tabItems.eq(++curIndex % length));
            this.setCurIndex(curIndex);
        }, 2000);
    },
    invoke:function(tab){
        let index = tab.index();
        tab.addClass('actived').siblings().removeClass('actived');
        if(this.config.effect === 'default'){
            this.contentItems.eq(index).addClass('current').siblings().removeClass('current');
        }else{
            this.contentItems.eq(index).fadeIn(500).siblings().fadeOut(500);
        }
        this.setCurIndex(index);
    },
    getConfig:function(){
        var config = this.tab.attr('data-config');
        if(config&&config!=''){
            return config;
        }else{
            return null;
        }
    },
    getCurIndex:function(){
        return this.curIndex;
    },
    setCurIndex:function(index){
        this.curIndex = index;
    }
};

export default Tab;