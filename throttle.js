// Adapted from https://gist.github.com/paulirish/1579671 which derived from
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

(function(win, raf, caf) {
    "use strict";
    
    var vendors = ["webkit", "moz"],
        now     = Date.now || function() { return new Date().getTime(); },
        i, vp;

    for(i = 0; i < vendors.length && !win[raf]; ++i) {
        vp = vendors[i];
        
        win[raf] = win[vp + "RequestAnimationFrame"];
        win[caf] = (win[vp + "CancelAnimationFrame"] || win[vp + "CancelRequestAnimationFrame"]);
    }
    
    if(!win[raf] ||
       !win[caf] ||
       /iP(ad|hone|od).*OS 6/.test(win.navigator.userAgent)) {
        var lastTime = 0;
        
        win[raf] = function(callback) {
            var now  = now(),
                next = Math.max(lastTime + 16, now);
            
            return setTimeout(function() {
                callback(lastTime = next);
            }, next - now);
        };
        
        win[caf] = clearTimeout;
    }
}(window, "requestAnimationFrame", "cancelAnimationFrame"));

(function(win) {
    win.throttler = function(el, event, fn) {
        
    };
}(window));
