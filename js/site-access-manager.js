//前回最後に表示したページのHTMLにリダイレクトする
//前回ページのID取得
let lastPage = $.cookie("last-page-id");

$(function() {
	//現在のページ取得
	let nowPage = $("body").attr("id");
	//前回のページと
	let path = location.pathname;
	let doc = path.substring(0, path.lastIndexOf("/"));
	let htmlName = doc.substring(doc.lastIndexOf("/"));
	console.log(path);
	console.log(doc);
	console.log(htmlName);
});

//ブラウザバックしたとき現在のページを履歴に追加
$(window).on("popstate", function() {
	//現在のページ取得
	let nowPage = $("body").attr("id");
	
	//履歴追加
	/*
	let path = location.pathname;
	let doc = path.substring(0, path.lastIndexOf("/"));
	let htmlName = doc.substring(doc.lastIndexOf("/"));
	switch(nowPage) {
		case "home":
			if(htmlName == "profile" || htmlName == "content" || htmlName == "contact") {
				history.pushState(null, null, "../index.html");
			}
			break;
		case "profile":
			if(htmlName == "home") {
				history.pushState(null, null, "profile/index.html");
			} else if(htmlName == "content" || htmlName == "contact") {
				history.pushState(null, null, "../profile/index.html");
			}
			break;
		case "content":
			break;
		case "contact":
			break;
	}*/
	
});
window.history.pushState(null, null, "profile/index.html");