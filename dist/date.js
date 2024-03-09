import { test } from "./index.js";
const $date_ = document.querySelector(".date_");
const result = test.getDaysOfMonth();
result.forEach((it) => {
    const button = document.createElement("button");
    if (it !== undefined) {
        button.innerHTML = it.toString();
    }
    $date_.appendChild(button);
});
