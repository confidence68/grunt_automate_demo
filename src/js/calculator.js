
function scoreToStar(score) {
	var str;
	if (score > 0 && score < 1) {
		str = "star_1";
	}
	else if (Math.abs(score - 1) <= 0) {
		str = "star_2";
	}
	else if (score > 1 && score < 2) {
		str = "star_3";
	}
	else if (Math.abs(score - 2) <= 0) {
		str = "star_4";
	}
	else if (score > 2 && score < 3) {
		str = "star_5";
	}
	else if (Math.abs(score - 3) <= 0) {
		str = "star_6";
	}
	else if (score > 3 && score < 4) {
		str = "star_7";
	}
	else if (Math.abs(score - 4) <= 0) {
		str = "star_8";
	}
	else if (score > 4 && score < 5) {
		str = "star_9";
	}
	else if (score >= 5) {
		str = "star_10";
	}
	else {
		str = "star_0";
	}
	return str;
}

//input框只能输入数字
function clearNoNum(obj) {
	//先把非数字的都替换掉，除了数字和.
	obj.value = obj.value.replace(/[^\d.]/g, "");
	//必须保证第一个为数字而不是.
	obj.value = obj.value.replace(/^\./g, "");
	//保证只有出现一个.而没有多个.
	obj.value = obj.value.replace(/\.{2,}/g, ".");
	//保证.只出现一次，而不能出现两次以上
	obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
}
//点也不能出现
function clearNoNumNew(obj) {
	//先把非数字的都替换掉，除了数字和.
	obj.value = obj.value.replace(/[^\d]/g, "");
	//必须保证第一个为数字而不是.
	obj.value = obj.value.replace(/^\./g, "");
	//保证只有出现一个.而没有多个.
	obj.value = obj.value.replace(/\.{,}/g, ".");
	//保证.只出现一次，而不能出现两次以上
	obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
}

String.prototype.formatMoney = function () {
	var num = this;
	num = num.toString().replace(/\$|\,/g, '');
	if (isNaN(num))
		num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num * 10 + 0.50000000001);
	num = Math.floor(num / 10).toString();
	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
		num = num.substring(0, num.length - (4 * i + 3)) + ',' +
			num.substring(num.length - (4 * i + 3));
	return (((sign) ? '' : '-') + num);
};

function stopPropagation(e) {
	e = e || window.event;
	if (e.stopPropagation) { //W3C阻止冒泡方法  
		e.stopPropagation();
	} else {
		e.cancelBubble = true; //IE阻止冒泡方法  
	}
}

function manualLevelCode(code) {
	var clsName = "";
	var ctx = parseInt(code);
	switch (ctx) {
		case 3:
			clsName = "ico_cbgw";
			break;
		case 2:
			clsName = "ico_jsgm";
			break;
		case 1:
			clsName = "tj_by";
			break;
		case 0:
			clsName = "hack_rs";
			break;
		default:
			clsName = "tj_by";
			break;
	}
	return clsName;
}

function manualLevelCodeStr(code) {
	var str = "";
	code = parseInt(code);
	switch (code) {
		case 3:
			str = "持币观望";
			break;
		case 2:
			str = "谨慎购买";
			break;
		case 1:
			str = "推荐购买";
			break;
		case 0:
			str = "尽快入手";
			break;
		default:
			str = "推荐购买";
			break;
	}
	return str;
}

function manualLevelCodeNew(ctx) {
	var clsName = ""; ;
	switch (ctx) {
		case "谨慎购买":
			clsName = "ico_jsgm";
			break;
		case "持币观望":
			clsName = "ico_cbgw";
			break;
		case "推荐购买":
			clsName = "tj_by";
			break;
		case "尽快入手":
			clsName = "hack_rs";
			break;
		default:
			clsName = "tj_by";
			break;
	}
	return clsName;
}

function manualLevelCodeImg(code) {
	var imgUrl = "";
	code = parseInt(code);
	switch (code) {
		case 3:
			imgUrl = "Content/images/xfproject_jsgm.png";
			break;
		case 2:
			imgUrl = "Content/images/xfproject_cbgw.png";
			break;
		case 1:
			imgUrl = "Content/images/xfproject_tjgm.png";
			break;
		case 0:
			imgUrl = "Content/images/xfproject_jkrs.png";
			break;
		default:
			imgUrl = "Content/images/xfproject_tjgm.png";
			break;
	}
	return imgUrl;
}

function checkConnection() {
//		var networkState = navigator.connection.type;
//		if (networkState == Connection.NONE) {
//			NativeAlert.alert("无法连接网络,请稍后重试");
//			return false;
//		}
	return true;
}
//获取url参数值
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var u = decodeURI(window.location.search.substr(1));
	u = u.replace(/\s+/g, "");
	var r = u.match(reg);
	if (r != null) return decodeURI(r[2]); return null;
}