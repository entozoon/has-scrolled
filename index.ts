export const scrollY = element => element.scrollTop;

const setHasScrolled = options => () => {
  // Defaults to <body>
  const defaults = {
    element: document.querySelector("body"),
    // target
    minScroll: 50,
    scrollTolerance: 30,
    class: "has-scrolled"
  };
  options = { ...defaults, ...options };
  options.target = options.target || options.element;
  const { element, target, minScroll, scrollTolerance } = options;
  const hasScrolledClass = options.class;

  // Toggle a class if user has scrolled down somewhat.
  // Allow a scrollTolerance either way as, for pages where the header is sticky, it's a whole thing
  if (scrollY(element) > minScroll + scrollTolerance) {
    target.classList.add(hasScrolledClass);
  } else if (scrollY(element) < minScroll - scrollTolerance) {
    target.classList.remove(hasScrolledClass);
  }

  // OPTIMISATION - we could allow an option to have it run less frequently - frameskip style
  window.requestAnimationFrame(setHasScrolled(options));
};

const hasScrolled = options => {
  // Use animation frames rather than on scroll, as it's hard to say exactly when the page load position has locked in
  window.requestAnimationFrame(setHasScrolled(options));
};
export default hasScrolled;
