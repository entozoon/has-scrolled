module.exports = () => {
  window.addEventListener("scroll", () => {
    let scrollTop =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0);
    console.log(scrollTop);
  });
};
