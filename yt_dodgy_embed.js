// ==UserScript==
// @name        Youtube dodgy embed swap
// @namespace   w/e
// @description good
// @include         https://*.youtube.com/*
// @version     2
// @downloadURL   https://raw.githubusercontent.com/dollarskate/dodgyyoutube/main/yt_dodgy_embed.js
// ==/UserScript==

function diabolicallyBad()
{
    if (location.pathname=="/watch")
    {
        var containerElement = $("div#player-container-inner");
        var videoElement1 = $("div#player-container");
        var videoElement2 = $("video.video-stream.html5-main-video");
        var replacedElement = $("#myverycoolembededvid");


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
            var url = "https://www.youtube.com/embed/"+(new URLSearchParams(window.location.search)).get("v")+"?autoplay=1"
            //just sort of randomly tried some css until it worked
            containerElement.append('<iframe id="myverycoolembededvid" src="'+url+'" style="height: -webkit-fill-available; width: -webkit-fill-available;top: 0; position: absolute;"></iframe>');
        }
    }
}

console.log("hello freeman")
setInterval(diabolicallyBad, 250);
