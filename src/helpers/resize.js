export const navWidth = (customNav) => {
  let el = document.querySelector("#socialNav");
  if (el) {
    let pos = el.getBoundingClientRect();
    if (customNav && customNav.current) {
      customNav.current.style.width = el.offsetWidth - 30 + "px";
      customNav.current.style.left = pos.left + 15 + "px";
      customNav.current.style.right = pos.right + "px";
    }
  }
};
