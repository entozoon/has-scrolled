export const scrollY =
  document.documentElement && document.documentElement.scrollTop
    ? document.documentElement.scrollTop
    : document.body.scrollTop;

const setHasScrolled = () => {
  // Toggle a class if user has scrolled down somewhat. These should be parameters ideally
  let somewhat = 50,
    tolerance = 30;

  // Allow a tolerance either way, for old pages as header is sticky, and it's a whole thing
  if (scrollY > somewhat + tolerance) {
    document.body.classList.add("has-scrolled");
  } else if (scrollY < somewhat - tolerance) {
    document.body.classList.remove("has-scrolled");
  }
  // <body data-scroll-y="120">
  document.body.setAttribute("data-scroll-y", scrollY);

  // OPTIMISATION - we could allow an option to have it run less frequently - frameskip style
  window.requestAnimationFrame(setHasScrolled);
};

export default hasScrolled = () => {
  // Use animation frames rather than on scroll, as it's hard to say exactly when the page load position has locked in
  window.requestAnimationFrame(setHasScrolled);
};
