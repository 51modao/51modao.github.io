function addFavorite() {
    var title = '51modao磨刀网实时地址发布页';
    var url = 'https://51modao.github.io/';
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}


var _paq=window._paq=window._paq||[];_paq.push(["trackPageView"]),_paq.push(["enableLinkTracking"]),function(){var a="//51modao.xyz/matomo/";_paq.push(["setTrackerUrl",a+"matomo.php"]),_paq.push(["setSiteId","2"]);var e=(t=document).createElement("script"),t=t.getElementsByTagName("script")[0];e.type="text/javascript",e.async=!0,e.src=a+"matomo.js",t.parentNode.insertBefore(e,t)}();