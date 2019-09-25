const setHasScrolled = () => {
  // OPTIMISATION - we could allow an option to have it run less frequently - frameskip style

  let scroll =
    document.documentElement && document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop;

  // Toggle a class if user has scrolled down somewhat
  let somewhat = 50,
    tolerance = 30;

  // Allow a tolerance either way, for old pages as header is sticky, and it's a whole thing
  if (scroll > somewhat + tolerance) {
    document.body.classList.add("has-scrolled");
  } else if (scroll < somewhat - tolerance) {
    document.body.classList.remove("has-scrolled");
  }

  window.requestAnimationFrame(setScrollParallax);
};

export default hasScrolled = () => {
  // Use animation frames rather than on scroll, as it's hard to say exactly when the page load position has locked in
  window.requestAnimationFrame(setHasScrolled);
};
