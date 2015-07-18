function showDebugInfo(aDebug) {
    if(navigator.appName!="Microsoft Internet Explorer"){
	if (console && console.debug && aDebug) {
		console.groupCollapsed(aDebug.shift());
		while(aDebug.length) {
			try {
				var msg = aDebug.shift();
				if (console[msg[0]]) {
					console[msg[0]](msg[1]);
				} else {
					console.debug(msg);
				}
			} catch (e) {
				console.log(msg);
				console.log(e);
			}
		}
		console.groupEnd();
	}
    }
}

function showNewsMsgTips(sMsg, sRedirectUrl, sEditUrl, sAddUrl) {
	var returnBnt = '';
	var addTips;
	if(sRedirectUrl.indexOf("news") > 0 )
	{
		addTips = "文章";
	} else if ( sRedirectUrl.indexOf("template") > 0 ) {
		addTips = "模板";
	}
	if (sRedirectUrl) {
		returnBnt = '<button type="button" class="btn btn-primary" onclick="location.href=\''+sRedirectUrl+'\'">返回列表</button>';
	}
	var msgModal = '<div class="modal fade" id="msgModel">' +
		'<div class="modal-dialog">' +
		'<div class="modal-content">' +
		'<div class="modal-header">' +
		'<h4 class="modal-title">提示信息</h4>' +
		'</div>' +
		'<div class="modal-body">' +
		'<p>'+sMsg+'</p>' +
		'</div>' +
		'<div class="modal-footer">' +
		'<button type="button" class="btn btn-success" data-dismiss="modal" onclick="location.href=\'' + sEditUrl +'\'">继续编辑</button>' +
		returnBnt+
		'<button type="button" class="btn btn-info" data-dismiss="modal" onclick="location.href=\'' + sAddUrl +'\'">新增'+addTips+'</button>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';
	$(document.body).append(msgModal);
	$('#msgModel').modal({backdrop:'static'}).css({
		"margin-top": function () {return ($(window).height() / 2 - 60);}
	}).modal('show');
}

$(function(){
	$.ajaxSetup({dataType: 'json', dataFilter:function(ret, type){
		if (type == 'json') {
			ajax_ret = eval('(' + ret + ')');
			if (ajax_ret && ajax_ret.debug) {
				showDebugInfo(ajax_ret.debug);
				delete ajax_ret.debug;
				ret = json_encode(ajax_ret);
			}
		}
		return ret;
	}});

	//切换城市
	$('.city-menu a').click(function(){
		$.get(this.href, function(ret){
			if (ret.status == 0) {
				alert(ret.data);
			} else {
				location.reload();
			}
		});
		return false;
	});

	//日期选择
	if ($('.datepicker').datepicker) {
		$('.datepicker').datepicker({dateFormat:'yy-mm-dd'});
	}
	$('.laydatetime').click(function(){
		if (typeof laydate != 'function') {
			alert('请先引入laydate.js!');
			return false;
		}
		var format = 'YYYY-MM-DD hh:mm:ss';
		if ($(this).attr('format')) {
			format = $(this).attr('format');
		}
		laydate.skin('molv');
		laydate({istime: true, format: format});

	});
});