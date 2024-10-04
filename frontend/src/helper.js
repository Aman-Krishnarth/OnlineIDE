export const toggleClass = (ele, className) => {
  let el = document.querySelector(ele);
  el.classList.toggle(className);
};

export const backendUrl = "http://localhost:8080";
