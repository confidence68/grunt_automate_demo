
var cityauto = $('#sCity').autocomplete({
    source: function( request, response ) {
    	$.get('/ajax/index/city/?sKey=' + request.term, function(ret){
    		response(ret.data);
    	}, 'json');
    },
    select: function( event, ui ) {
    	$('#iCityID').val(ui.item.id);
		$('#sSelectCityName').val(ui.item.sCityName);
		$('#sCity').val(ui.item.sCityName);
    	$('#sCity').blur();
    	$('#sCity').focus();
		$('#sCity').change();
    },
    response: function( event, ui ) {
    }
}).autocomplete("instance")._renderItem = function( ul, item ) {

	item.label = item.sCityName + " <span style='color: #818181;'>" + item.sFullPinyin + "</span>";
	item.value = item.sCityName;
	item.id = item.iCityID;
	item.data = item;
	return $( "<li>" )
	.append( "<a>" + item.sCityName + " <span style='color: #818181;'>" + item.sFullPinyin + "</span></a>" )
	.appendTo( ul );

};