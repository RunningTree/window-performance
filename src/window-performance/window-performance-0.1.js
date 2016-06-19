(function() {

    var time = performance.timing;
    var timingObj = {};
    console.log(performance.timing);

    timingObj['重定向时间'] = (time.redirectEnd - time.redirectStart) / 1000;
    timingObj['DNS解析时间'] = (time.domainLookupEnd - time.domainLookupStart) / 1000;
    timingObj['TCP完成握手时间'] = (time.connectEnd - time.connectStart) / 1000;
    timingObj['HTTP请求响应完成时间'] = (time.responseEnd - time.requestStart) / 1000;
    // timingObj['onload事件时间'] = (time.loadEventEnd - time.loadEventStart) / 1000;


    window.onload = function() {
        timingObj['DOM开始加载前所花费时间'] = (time.responseEnd - time.navigationStart) / 1000;
        timingObj['DOM加载完成时间'] = (time.domComplete - time.domLoading) / 1000;
        timingObj['DOM结构解析完成时间'] = (time.domInteractive - time.domLoading) / 1000;
        timingObj['脚本加载时间'] = (time.domContentLoadedEventEnd - time.domContentLoadedEventStart) / 1000;
        timingObj['页面完全加载时间'] = (timingObj['重定向时间'] + timingObj['DNS解析时间'] + timingObj['TCP完成握手时间'] + timingObj['HTTP请求响应完成时间'] + timingObj['DOM结构解析完成时间'] + timingObj['DOM加载完成时间']);
        for (item in timingObj) {
            console.log(item + ":" + timingObj[item] + '毫秒');
        }
    };

})();
