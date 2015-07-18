function bindBusAutocomplete(){
    return $('.bus_name').each(function(item){
        $(this).autocomplete({
            source: function (request, response) {
                $.get('/evaluation/Traffic/getStations/?iCityID=' + iCityId + '&sKey=' + request.term, function (ret) {
                    response(ret.data);
                }, 'json');
            },
            select: function (event, ui) {
                $(this).val(ui.item.sStation);
                $(this).blur();
                $(this).focus();

            },
            response: function (event, ui) {
            }
        }).autocomplete("instance")._renderItem = function (ul, item) {
            item.label = item.sStation;
            item.value = item.sStation;
            item.id = item.iAutoID;
            item.data = item;
            item.iType = parseInt(item.iType);

            return $("<li>")
                .append("<a>" + item.sStation  + "</a>")
                .appendTo(ul);

        };
    })
}

var cityauto = bindBusAutocomplete();