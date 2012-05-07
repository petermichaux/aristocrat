var aristocrat = aristocrat || {};

(function() {

    var regExpCache = {};

    function getRegExp(className) {
        return Object.prototype.hasOwnProperty.call(regExpCache, className) ?
                   regExpCache[className] :
                   (regExpCache[className] = new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)'));
    }

    var hasClass = aristocrat.hasClass = function(el, className) {
        return getRegExp(className).test(el.className);
    };

    var addClass = aristocrat.addClass = function(el, className) {
        if (!hasClass(el, className)) {
            el.className = el.className + ' ' + className;
        }
    };

    var removeClass = aristocrat.removeClass = function(el, className) {
        var re = getRegExp(className);
        while (re.test(el.className)) { // in case multiple occurrences
            el.className = el.className.replace(re, ' ');
        } 
    };

    aristocrat.toggleClass = function(el, className) {
        if (hasClass(el, className)) {
            removeClass(el, className);
        }
        else {
            addClass(el, className);
        }
    };

}());
