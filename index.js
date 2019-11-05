"use strict";
exports.__esModule = true;
exports.scrollY = function () {
    return document.documentElement && document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
};
var setHasScrolled = function () {
    // Toggle a class if user has scrolled down somewhat. These should be parameters ideally
    var somewhat = 50, tolerance = 30;
    // Allow a tolerance either way, as for pages where the header is sticky it's a whole thing
    if (exports.scrollY() > somewhat + tolerance) {
        document.body.classList.add("has-scrolled");
    }
    else if (exports.scrollY() < somewhat - tolerance) {
        document.body.classList.remove("has-scrolled");
    }
    // <body data-scroll-y="120">
    document.body.setAttribute("data-scroll-y", String(Math.floor(exports.scrollY())));
    // OPTIMISATION - we could allow an option to have it run less frequently - frameskip style
    window.requestAnimationFrame(setHasScrolled);
};
var hasScrolled = function () {
    // Use animation frames rather than on scroll, as it's hard to say exactly when the page load position has locked in
    window.requestAnimationFrame(setHasScrolled);
};
exports["default"] = hasScrolled;
