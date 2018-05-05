var Array = function(before, after){
	this.before = before || [];
	this.after = after || [];
	this.diff = [];
	this.after = this.after.map(function(item){
		return item.toString();
	});
	this.before = this.before.map(function(item){
		return item.toString();
	});
};
Array.prototype = {
	setDiff: function(){
		var _after = this.after;
		var _before = this.before;
		this.diff = _after.concat(_before).filter(function(item){
		  return _after.indexOf(item)==-1 || _before.indexOf(item)==-1;
		});
	},
	isNew: function(id){
		var isNew = false;
		for(var i=0;i<this.after.length;i++){
			if(this.after[i] == id.toString()){
				isNew = true;
			}
		}
		return isNew;
	},
	isExist: function(obj, array){
		var _index;
		array.forEach(function(item, index){
			_index = obj.toSting() === item.toSting() ? index : -1;
		})
		return _index;
	}
};

module.exports = Array