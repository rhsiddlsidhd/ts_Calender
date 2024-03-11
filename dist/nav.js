import { todayClass } from "./index.js";
const $navToday = document.querySelector(".nav_today");
const $nav_prev = document.querySelector(".nav_prev");
const $nav_next = document.querySelector(".nav_next");
const $date_ = document.querySelector(".date_");
/**
 * today 버튼
 */
const updateToday = () => {
    const currentDate = todayClass.navStringBuilder();
    $navToday.innerHTML = currentDate;
};
updateToday();
$navToday.addEventListener("click", updateToday);
/**
 * prev 버튼
 */
const prevBtn = () => {
    todayClass.dataClear();
    const currentDate = todayClass.prevBtnCal(-1);
    todayClass.render($date_);
    $navToday.innerHTML = `${currentDate}`;
};
$nav_prev.addEventListener("click", prevBtn);
/**
 * next 버튼
 */
const nextBtn = () => {
    todayClass.dataClear();
    const currentDate = todayClass.prevBtnCal(1);
    todayClass.render($date_);
    $navToday.innerHTML = `${currentDate}`;
};
$nav_next.addEventListener("click", nextBtn);
