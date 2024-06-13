// ==UserScript==
// @name        Youtube dodgy embed swap
// @namespace   w/e
// @description good
// @include         https://*.youtube.com/*
// @version     3
// @downloadURL   https://raw.githubusercontent.com/dollarskate/dodgyyoutube/main/yt_dodgy_embed.js
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

function diabolicallyBad()
{
    var replacedElement = jQuery("iframe#myverycoolembededvid");
    var url = "https://www.youtube.com/embed/"+(new URLSearchParams(window.location.search)).get("v")+"?autoplay=1"

    if (replacedElement.length > 0)
    {
        if (replacedElement[0].src != url) //we've navigated away
        {
            replacedElement.remove()
        }
    }
    if (location.pathname=="/watch")
    {
        var containerElement = jQuery("div#player-container-inner");
        var videoElement1 = jQuery("div#player-container");
        var videoElement2 = jQuery("video.video-stream.html5-main-video");


        if (videoElement1.length > 0)
        {
            videoElement1.css("visibility", "hidden");
        }
        if (videoElement2.length > 0)
        {
            videoElement2[0].pause();
            videoElement2[0].removeAttribute('src'); // empty source
            videoElement2[0].load();
        }
        if (containerElement.length > 0 && replacedElement.length == 0) //just sorta brute force it until it works
        {
            //replace with iframe containing embeded video
            console.log("my goodness, what are you doing?");
            //just sort of randomly tried some css until it worked
            containerElement.append('<iframe id="myverycoolembededvid" src="'+url+'" style="height: -webkit-fill-available; width: -webkit-fill-available;top: 0; position: absolute;"></iframe>');
        }
    }
}

console.log("hello freeman")
setInterval(diabolicallyBad, 250);
