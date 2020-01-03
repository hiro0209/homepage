//サイト全体のアニメーション

//ready
$(function() {
	//スタートアニメーション
	if($(window).width() >= 1572) {
		animeElementStartAnimation();
	} else {
		animeElementStartAnimationForMobile();
	}
});

//resize
$(window).on("resize", () => {
	let width = $(window).width();
	let height = $(window).height();
	
	if($("body").attr("class") == "home") {
		let path;
		let svg = $("#anime-ele");
		svg.attr("viewBox", "0 0 " + width + " " + height);
		if(width < 1572) {
			$(".navigation").hide();
			svg.children("path").attr("d", "");
		} else  {
			$(".navigation").show();
			path = "M" + ((width - width * 0.195) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - width * 0.195) * 0.9) + "," + height + " Q" + ((width - width * 0.195)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - width * 0.195)) + " " + (height / 2) + " T" + ((width - width * 0.195) * 0.9) + " 0";
			svg.children("path").attr("d", path);
		}
	} else {
		let svg = $("#anime-ele");
		let path = "M0,0 L" + width + ",0 " + width + "," + height + " 0," + height + " T0 0";
		svg.attr("viewBox", "0 0 " + width + " " + height);
		svg.children("path").attr("d", path);
	}
	
	/*if($(".content").attr("style") != "display: none") {
		contentCardPoditionControl();
	}*/
	
	//ホームのメニューバーの処理
	/*if($("body").attr("class") == "home") {
		if(width >= 1025) {
			$("header").children("#menubar").attr("onClick", "changePage('pagelist', 'home');");
		} else {
			$("header").children("#menubar").attr("onClick", "$('.groval-nav').slideToggle();");
		}
	}*/
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
		//if(width >= 1025) {
		if(widthCount > width * 0.2) {
			path = "M" + ((width - widthCount) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - widthCount) * 0.9) + "," + height + " Q" + ((width - widthCount)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - widthCount)) + " " + (height / 2) + " T" + ((width - widthCount) * 0.9) + " 0";
			svg.children("path").attr("d", path);
		} else {
			$(".navigation").slideToggle();
			clearInterval(timer);
		}
		/*} else {
			if(widthCount > 0) {
				path = "M" + ((width - widthCount) * 0.9) + ",0 L" + width + ",0 " + width + "," + height + " " + ((width - widthCount) * 0.9) + "," + height + " Q" + ((width - widthCount)) + " " + (height / 2 * 2 - height / 20) + " " + ((width - widthCount)) + " " + (height / 2) + " T" + ((width - widthCount) * 0.9) + " 0";
				svg.children("path").attr("d", path);
			} else {
				svg.children("path").attr("d", "");
				clearInterval(timer);
			}
		}*/
	}, 6);
}

function animeElementStartAnimationForMobile() {
	
}