function toggle(btnID, eID) {
  const theRow = document.querySelector(eID);
  const theButton = document.getElementById(btnID);
  const isExpanded = theButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    theRow.classList.add("hidden");
    theRow.classList.remove("shown");
  } else {
    theRow.classList.add("shown");
    theRow.classList.remove("hidden");
  }
  theButton.setAttribute("aria-expanded", !isExpanded);
}
  export default toggle;