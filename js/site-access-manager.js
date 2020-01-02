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
	let path = location.pathname;
	let doc = path.substring(0, path.lastIndexOf("/"));
	let htmlName = doc.substring(doc.lastIndexOf("/"));
	/*switch(nowPage) {
		case "home":
			switch(htmlName) {
					case 
			}
	}*/
	
});