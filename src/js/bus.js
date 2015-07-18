function bindBusAutocomplete(){
    return $('.bus_name').each(function(item){
        $(this).autocomplete({
            source: function (request, response) {
                $.get('/ajax/index/bus/?iCityID=' + iCityId + '&sKey=' + request.term, function (ret) {
                    response(ret.data);
                }, 'json');
            },
            select: function (event, ui) {
                $(this).val(ui.item.sBusName);

                $(this).prev().val(ui.item.iBusID);
                $(this).next().val(ui.item.sBusName);

                $(this).blur();
                $(this).focus();
                $(this).change();

                $input = $(this);
                $.post("/ajax/index/stations", {iBusId: ui.item.iBusID}, function(ret){
                    $input.parent().parent().next().find('select').empty();
                    $input.parent().parent().next().find('select').append('<option value="0">请选择临近站点</option>');
                    len = ret.data.length;
                    for(i = 0; i < len; i++){
                        $input.parent().parent().next().find('select').append('<option value=' + ret.data[i].iAutoID + '>'+ ret.data[i].sStation + '</option>');
                    }
                }, 'json');
            },
            response: function (event, ui) {
            }
        }).autocomplete("instance")._renderItem = function (ul, item) {
            item.label = item.sBusName;
            item.value = item.sBusName;
            item.id = item.iBusID;
            item.data = item;
            var type = '';
            item.iType = parseInt(item.iType);
            switch (item.iType) {
                case 0:
                    type = '无';
                    break;
                case 1:
                    type = '上行';
                    break;
                case 2:
                    type = '下行';
                    break;
                case 3:
                    type = '内环';
                    break;
                case 4:
                    type = '外环';
                    break;
                default :
                    break;
            }

            return $("<li>")
                .append("<a>" + item.sBusName + " " + type + "</a>")
                .appendTo(ul);

        };
    })
}

var cityauto = bindBusAutocomplete();