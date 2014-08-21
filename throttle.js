/*jshint browser:true */
(function(win) {
    win.throttler = function(fn, context) {
        var trigger,
            args;
        
        return function() {
            args = arguments;

            if(trigger) {
                return;
            }
            
            trigger = requestAnimationFrame(function() {
                trigger = null;
                
                fn.apply(context, Array.prototype.slice.apply(args));
            });
        };
    };
}(window));
