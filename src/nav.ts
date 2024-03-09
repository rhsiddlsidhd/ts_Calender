import { test } from "./index.js";

const $todayBtn = document.querySelector(".nav_today") as HTMLButtonElement;
const $nav_prev = document.querySelector(".nav_prev") as HTMLButtonElement;
const $nav_next = document.querySelector(".nav_next") as HTMLButtonElement;
const $date_ = document.querySelector(".date_") as HTMLElement;

/**
 * today 버튼
 */

const updateToday = () => {
  const currentDate = test.todayBtn();
  $todayBtn.innerHTML = currentDate;
};

updateToday();
$todayBtn.addEventListener("click", updateToday);

/**
 * prev 버튼
 */

const updatePrev = () => {
  const currentDate = test.prevBtn(-1);
  $todayBtn.innerHTML = `${currentDate}`;

  $date_.innerHTML = "";

  const render = test.getDaysOfMonth();

  render.forEach((it) => {
    const button = document.createElement("button");
    if (it !== undefined) {
      button.innerHTML = it.toString();
    }

    $date_.appendChild(button);
  });
};
$nav_prev.addEventListener("click", updatePrev);

/**
 * next 버튼
 */

const updateNext = () => {
  const currentDate = test.prevBtn(1);
  $todayBtn.innerHTML = `${currentDate}`;

  $date_.innerHTML = "";

  const render = test.getDaysOfMonth();

  render.forEach((it) => {
    const button = document.createElement("button");
    if (it !== undefined) {
      button.innerHTML = it.toString();
    }

    $date_.appendChild(button);
  });
};

$nav_next.addEventListener("click", updateNext);
