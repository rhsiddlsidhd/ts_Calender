import { todayClass } from "./index.js";
const weekday_ = document.querySelector(".weekday_");
const result = todayClass.navDayOfWeekBuilder();
result.forEach((it) => {
    const button = document.createElement("button");
    button.innerHTML = it;
    weekday_.appendChild(button);
});
