const toggle = (buttonId, contentId) => {
  const content = document.querySelector(contentId);
  const button = document.getElementById(buttonId);

  if (content.classList.contains("visually-hidden")) {
    content.classList.remove("visually-hidden");
    content.style.height = "auto";
    const height = content.clientHeight + "px";
    content.style.height = "0px";

    setTimeout(() => {
      content.style.height = height;
    }, 0);

    button.setAttribute("aria-expanded", "true");
  } else {
    content.style.height = "0px";

    content.addEventListener(
      "transitionend",
      () => {
        content.classList.add("visually-hidden");
      },
      {
        once: true,
      }
    );

    button.setAttribute("aria-expanded", "false");
  }
};
  export default toggle;