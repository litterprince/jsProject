(function(){
	var datepicker = {};
	datepicker.datepickerItem = function(){
		this.monthData;
		this.$wrapper;
		this.$input;
	};

	datepicker.datepickerItem.prototype.getMonthData = function(year, month){
		var ret = [];

		if(year==undefined || month==undefined){
			var date = new Date();
			year = date.getFullYear();
			month = date.getMonth() + 1;
		}

		var firstDay = new Date(year, month-1, 1);
		year = firstDay.getFullYear();
		month = firstDay.getMonth() + 1;

		var firstDayOfWeek = firstDay.getDay();
		if(firstDayOfWeek === 0) firstDayOfWeek = 7;
		var perMonthDayCounts = firstDayOfWeek -1;

		var lastDay = new Date(year, month, 0).getDate();
		var lastMonthLastDay = new Date(year, month-1, 0).getDate();

		for(var i=1; i<6*7+1; i++){
			var date = i;
			var thisMonth = month;
			var showDay = date - perMonthDayCounts;
			if(showDay > lastDay){
				//下一月
				showDay = showDay  - lastDay;
				thisMonth = month + 1;
			}
			if(showDay <= 0){
				//上一月
				showDay = lastMonthLastDay + showDay;
				thisMonth = month - 1;
			}

			ret.push({
				month: thisMonth,
				date: date,
				showDay: showDay
			});
		}

		return {
			year: year,
			month: month,
			data: ret
		};
	}

	datepicker.datepickerItem.prototype.buildUi = function(year, month){
		this.monthData = this.getMonthData(year, month);
		var year = this.monthData.year;
		var month = this.monthData.month;
		var data = this.monthData.data;

		var html = '<div class="ui-datepicker-header">' +
			'<a href="#" class="ui-datepicker-btn ui-datepicker-pre-btn">&lt;</a>' +
			'<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>' +
			'<span class="ui-datepicker-current">'+ year +'-'+month+'</span>' +
		'</div>' +
		'<div class="ui-datepicker-body">' +
			'<table>' +
				'<thead>' +
					'<tr>' +
					'<th>一</th>' +
					'<th>二</th>' +
					'<th>三</th>' +
					'<th>四</th>' +
					'<th>五</th>' +
					'<th>六</th>' +
					'<th>天</th>' +
				'</tr>' +
				'</thead>';

		html += '<tbody>';
		for(var i=0;i<data.length;i++){
			var showDay = data[i].showDay;
			if(i % 7 === 0){
				html += '<tr>';
			}
			html += '<td>'+ showDay + '</td>';
			if((i+1) % 7 === 0){
				html += '</tr>';	
			}
		}
		html += '</tbody>';

		html += '</table>' +
		'</div>';

		return html;
	}

	datepicker.datepickerItem.prototype.render = function(option){
		var year,month;
		var $wrapper = this.$wrapper;
		if(this.monthData){
			year = this.monthData.year;
			month = this.monthData.month;
		}

		if(option.oper === 'prev') month--;
		if(option.oper === 'next') month++;

		if($wrapper){
			var html = this.buildUi(year, month);
			$wrapper.innerHTML = html;
		}else{
			$wrapper = document.createElement('div');
			$wrapper.className = 'ui-datepicker-wrapper';
			var html = this.buildUi(year, month);
			$wrapper.innerHTML = html;

			var $input = this.$input;
			var $parent = $input.parentNode;
			if(option.director === 'top'){
				$parent.insertBefore($wrapper, $input);
			}else{
				insertAfter($wrapper, $input);
			}
			this.$wrapper = $wrapper;
		}
	}

	datepicker.datepickerItem.prototype.init = function(option){
		var $input = this.$input;
		var $parent = $input.parentNode;
		var isOpen = false;
		var that = this;

		this.render(option);
		var $wrapper = this.$wrapper;
		$input.setAttribute('readonly', 'readonly');

		//输入框点击事件
		$input.addEventListener('click', function(){
			if(isOpen){
				$wrapper.classList.remove('ui-datepicker-wrapper-show');
				isOpen = false;
			}else{
				$wrapper.classList.add('ui-datepicker-wrapper-show');
				isOpen = true;
			}
		});

		//组件容器点击事件
		$wrapper.addEventListener('click', function(e){
			var $target = e.target;

			//切换月份事件
			if($target.classList.contains('ui-datepicker-btn')){
				//上个月
				if($target.classList.contains('ui-datepicker-pre-btn')){
					option.oper = 'prev';
					that.render(option);
				}

				//下个月
				if($target.classList.contains('ui-datepicker-next-btn')){
					option.oper = 'next';
					that.render(option);
				}
			}

			//点击选择事件
			if($target.nodeName === 'TD'){
				var day = $target.innerHTML;
				var date = new Date(that.monthData.year, that.monthData.month, day);
				$input.value = formatDate(date);
				$wrapper.classList.remove('ui-datepicker-wrapper-show');
				isOpen = false;
			}
		});
	}

	datepicker.init = function(params){
		var $inputs = document.querySelectorAll('.datepicker');
		var option = {
			director: params.director || 'bottom',
			oper: ''
		}
		for(var i=0;i<$inputs.length;i++){
			var item = new this.datepickerItem();
			item.$input = $inputs[i];
			item.init(option);
		}
	}

	function formatDate(date){
		var ret;
		var padding = function(num){
			if(num < 9){
				num = '0' + num;
			}
			return num;
		}

		var year = date.getFullYear();
		var month = padding(date.getMonth());
		var day = padding(date.getDate());
		ret = year + '-' + month + '-' + day;

		return ret;
	}
	function insertAfter(newEl, targetEl){
    var parentEl = targetEl.parentNode;
	            
		if(parentEl.lastChild == targetEl){
		   parentEl.appendChild(newEl);
		}else{
		   parentEl.insertBefore(newEl,targetEl.nextSibling);
		}            
	}

	window.datepicker = datepicker;
})()