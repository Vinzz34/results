let categories = document.querySelectorAll(".right__text");
let scores = document.querySelectorAll(".right__score");
let details = document.querySelectorAll(".right__details");

let icon = document.createElement("img");
icon.classList.add("right__logo");
icon.setAttribute("alt", "");

let total = document.createElement("span");
total.textContent = " / 100";
total.classList.add("right__total");


fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i in data) {
      categories[i].textContent = data[i].category;
      scores[i].textContent = data[i].score;
      scores[i].append(total.cloneNode(true));
      icon.setAttribute("src", data[i].icon);
      details[i].prepend(icon.cloneNode(true));
    }
  });
