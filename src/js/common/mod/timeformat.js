/**
 * Created by 11789 on 2017/12/28.
 * @discription
 * @parameter
 * @example  type  'yyyy-MM-dd'    "yyyy-MM-dd hh:mm:ss"
 */

exports.timeFormat = function (type) {
	var date = new Date();

	var o = {
		"M+": date.getMonth() + 1, //月份
		"d+": date.getDate(), //日
		"h+": date.getHours(), //小时
		"m+": date.getMinutes(), //分
		"s+": date.getSeconds(), //秒
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度
		"S": date.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(type)) type = type.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(type)) type = type.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return type;
}