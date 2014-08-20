/*jshint browser:true */
(function(win) {
    win.throttler = function(fn) {
        var trigger;
        
        return function() {
            if(trigger) {
                return;
            }
            
            trigger = requestAnimationFrame(function() {
                trigger = null;
                
                fn();
            });
        };
    };
}(window));
