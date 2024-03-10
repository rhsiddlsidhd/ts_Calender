let now = new Date(); //2024-03-09T01:35:03.646Z
let year = now.getFullYear(); // 2024
let month = now.getMonth() + 1; //3
let date = now.getDate(); //9
class Today {
    //필드
    year;
    month;
    date;
    static dayOfWeekStore = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];
    dateStore = [];
    //생성자
    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
        this.dateInputHandler();
    }
    //메서드
    clickEvent() {
        const buttonValue = document.querySelectorAll("button[value]");
        const changeDate = (e) => {
            const value = e.target.value;
            if (Number(value) !== this.date) {
                this.date = Number(value);
                // this.navStringBuilder(this.date);
            }
        };
        [...buttonValue].forEach((it) => {
            const btn = it;
            btn.addEventListener("click", changeDate);
        });
    }
    todayDatePicker() {
        /**버튼 value값과
         * this.date가 일치하는걸 컬러준다
         */
        setTimeout(() => {
            const test = document.querySelectorAll("button[value]");
            [...test].find((it) => {
                const btn = it;
                if (Number(btn.value) === this.date) {
                    btn.style.backgroundColor = "#FEC7B4";
                }
            });
        }, 1);
    }
    todayDate(Separator) {
        return `${this.year}${Separator}${this.month}${Separator}${this.date}`;
    }
    navStringBuilder() {
        const result = this.todayDate(".");
        return result;
    }
    navDayOfWeekBuilder() {
        return Today.dayOfWeekStore;
    }
    dateInputHandler() {
        const startOfDay = new Date(this.year, this.month - 1, 1).getDay();
        const date = new Date(this.year, this.month, 0).getDate();
        for (let i = 0; i < startOfDay; i++) {
            this.dateStore.push(undefined);
        }
        for (let i = 1; i <= date; i++) {
            this.dateStore.push(i);
        }
    }
    dateStoreBuilder() {
        return this.dateStore;
    }
    prevBtnCal(newMonth) {
        this.month += newMonth;
        if (this.month > 12) {
            this.year += 1;
            this.month -= 12;
        }
        else if (this.month < 1) {
            this.year -= 1;
            this.month += 12;
        }
        this.dateInputHandler();
        const result = this.todayDate(".");
        return result;
    }
    dataClear() {
        this.dateStore = [];
    }
    render(value) {
        if (value) {
            while (value.firstChild) {
                value.removeChild(value.firstChild);
            }
        }
        const result = todayClass.dateStoreBuilder();
        result.forEach((it) => {
            const button = document.createElement("button");
            if (it !== undefined) {
                button.value = it.toString();
                button.innerHTML = it.toString();
            }
            if (value !== undefined) {
                value.appendChild(button);
            }
        });
    }
}
const todayClass = new Today(year, month, date);
export { todayClass };
/**
 * calculator 계산기 때와 달리
 *
 * import 하여 readonly 값을 함수를 통해 변수에 값을 할당하는 방식을 사용하지 않고
 * 클레스 객체를 통해 해당 값을 사용
 */
