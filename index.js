"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.scrollY = function (element) { return element.scrollTop; };
var setHasScrolled = function (options) { return function () {
    var defaults = {
        element: document.querySelector("body"),
        minScroll: 50,
        scrollTolerance: 30,
        "class": "has-scrolled"
    };
    options = __assign(__assign({}, defaults), options);
    options.target = options.target || options.element;
    var element = options.element, target = options.target, minScroll = options.minScroll, scrollTolerance = options.scrollTolerance;
    var hasScrolledClass = options["class"];
    if (exports.scrollY(element) > minScroll + scrollTolerance) {
        target.classList.add(hasScrolledClass);
    }
    else if (exports.scrollY(element) < minScroll - scrollTolerance) {
        target.classList.remove(hasScrolledClass);
    }
    window.requestAnimationFrame(setHasScrolled(options));
}; };
var hasScrolled = function (options) {
    window.requestAnimationFrame(setHasScrolled(options));
};
exports["default"] = hasScrolled;
