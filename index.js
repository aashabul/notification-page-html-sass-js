const unread = document.querySelectorAll(".unread");
const markButton = document.getElementById("mark");
const dot = document.querySelectorAll(".red-dot");
const count = document.getElementById("count");

markButton.addEventListener("click", () => {
  unread.forEach((item) => {
    item.classList.remove("unread");
  });
  dot.forEach((item) => {
    item.classList.remove("red-dot");
  });
  count.innerHTML = "0";
});

unread.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.remove("unread");
    item.children[1].children[0].children[1].classList.remove("red-dot");
    item.children[1].children[0].children[2]
      ? item.children[1].children[0].children[2].remove("red-dot")
      : null;
    count.innerHTML = Number(count.innerText) - 1;
  });
});
