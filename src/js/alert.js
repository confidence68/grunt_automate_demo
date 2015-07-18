$(function(){
	var html = '';
	html += '<div class="modal fade" id="alertModal" tabindex="-1" role="dialog" aria-hidden="true">';
	html += '	<div class="modal-dialog modal-sm">';
	html += '    <div class="modal-content">';
	html += '		<div class="modal-header text-center" style="padding:8px;">';
	html += '        <h4 class="modal-title" id="exampleModalLabel">Alert</h4>';
	html += '      </div>';
	html += '      <div class="modal-body text-center">';
	html += '      </div>';
	html += '      <div class="text-center" style="padding-bottom:8px;">';
	html += '        <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">确认</button>';
	html += '      </div>';
	html += '    </div>';
	html += '  </div>';
	html += '</div>';
	$(html).appendTo(document.body);
	window.alertbox = function(title) {
		$('#alertModal').find('.modal-body').html(title);
		$('#alertModal').modal({backdrop:'static'}).css({
			"margin-top": function () {return ($(window).height() / 2 - 60);}
		}).modal('show');
	} 
});


