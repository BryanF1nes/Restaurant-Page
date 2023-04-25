import _ from "lodash";

const content = document.querySelector("#content");

(function init() {
  content.appendChild(backgroundImage());
  content.appendChild(text());
})();

function backgroundImage() {
  const div = document.createElement("div");
  div.setAttribute("id", "bgImg");

  return div;
}

function text() {
  const div = document.createElement("div");
  div.setAttribute("class", "welcome");
  div.innerHTML = `Welcome to our steakhouse!`;

  return div;
}
