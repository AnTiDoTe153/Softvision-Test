﻿$(document).ready(function() {
    var updateTime = function() {
        var time1 = Date.parse($(".UpgCompl").text());
        var now = Date.now();
        console.log(time1);
        $(".UpgTime").text(Date.parse(time1 - now));
    };

    setInterval(updateTime, 1000);
});