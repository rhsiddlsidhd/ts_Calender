let now = new Date(); //2024-03-09T01:35:03.646Z
let year = now.getFullYear(); // 2024
let month = now.getMonth() + 1; //3
let date = now.getDate(); //9
class Today {
    //필드
    year;
    month;
    date;
    static stringDay = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];
    static daysArr = [];
    //생성자
    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
        this.formatDays();
    }
    //메서드
    formatTodayString(Separator) {
        return `${this.year}${Separator}${this.month}${Separator}${this.date}`;
    }
    formatDays() {
        // if (offset !== 0 && offset !== undefined) {
        //   this.month += offset > 0 ? offset : offset;
        // }
        // console.log(this.month);
        const startOfDay = new Date(this.year, this.month - 1, 1).getDay();
        const days = new Date(this.year, this.month, 0).getDate();
        Today.daysArr = [];
        for (let i = 0; i < startOfDay; i++) {
            Today.daysArr.push(undefined);
        }
        for (let i = 1; i <= days; i++) {
            Today.daysArr.push(i);
        }
    }
    $stringday() {
        return Today.stringDay;
    }
    getDaysOfMonth() {
        return Today.daysArr;
    }
    todayBtn() {
        const today = this.formatTodayString(".");
        return today;
    }
    prevBtn(newMonth) {
        this.month += newMonth;
        if (this.month > 12) {
            this.year += 1;
            this.month -= 12;
        }
        else if (this.month < 1) {
            this.year -= 1;
            this.month += 12;
        }
        this.formatDays();
        const today = this.formatTodayString(".");
        return today;
    }
}
const test = new Today(year, month, date);
export { test };
/**
 * calculator 계산기 때와 달리
 *
 * import 하여 readonly 값을 함수를 통해 변수에 값을 할당하는 방식을 사용하지 않고
 * 클레스 객체를 통해 해당 값을 사용
 */
