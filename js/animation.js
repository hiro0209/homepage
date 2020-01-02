//サイト全体のアニメーション
let pageId;

//ready
$(function() {
	
	pageId = $("body").attr("id");
	animeElementStartAnimation();
});

//スタートアニメーション
function animeElementStartAnimation() {
	let svg = $("#anime-ele");
	let width = $(window).width();
	let height = $(window).height();
	let widthCount = $(window).width();
	let path = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
	svg.attr("viewBox", "0 0 " + width + " " + height);
	svg.children("path").attr("d", path);
	
	let timer = setInterval(function() {
		widthCount -= width * 0.005;
		if(width >= 1025) {
			if(widthCount > width * 0.2) {
				path = "M" + ((width - widthCount) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - widthCount) * 0.9) + "," + height + " Q" + ((width - widthCount)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - widthCount)) + " " + (height / 2) + " T" + ((width - widthCount) * 0.9) + " 0";
				svg.children("path").attr("d", path);
			} else {
				clearInterval(timer);
			}
		} else {
			if(widthCount > 0) {
				path = "M" + ((width - widthCount) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - widthCount) * 0.9) + "," + height + " Q" + ((width - widthCount)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - widthCount)) + " " + (height / 2) + " T" + ((width - widthCount) * 0.9) + " 0";
				svg.children("path").attr("d", path);
			} else {
				svg.children("path").attr("d", "");
				clearInterval(timer);
			}
		}
	}, 6);
}