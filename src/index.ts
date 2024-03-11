let now = new Date(); //2024-03-09T01:35:03.646Z
let year: number = now.getFullYear(); // 2024
let month: number = now.getMonth() + 1; //3
let date = now.getDate(); //9

class Today {
  //필드
  year: number;
  month: number;
  date: number;

  static dayOfWeekStore: string[] = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  dateStore: (number | undefined)[] = [];
  //생성자
  constructor(year: number, month: number, date: number) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.dateInputHandler();
  }

  //메서드

  todayDate(Separator: string): string {
    return `${this.year}${Separator}${this.month}${Separator}${this.date}`;
  }

  navStringBuilder() {
    const result = this.todayDate(".");
    return result;
  }

  navDayOfWeekBuilder(): string[] {
    return Today.dayOfWeekStore;
  }

  dateInputHandler(): void {
    const startOfDay = new Date(this.year, this.month - 1, 1).getDay();

    const date: number = new Date(this.year, this.month, 0).getDate();

    for (let i = 0; i < startOfDay; i++) {
      this.dateStore.push(undefined);
    }

    for (let i = 1; i <= date; i++) {
      this.dateStore.push(i);
    }
  }

  dateStoreBuilder(): (number | undefined)[] {
    return this.dateStore;
  }

  prevBtnCal(newMonth: number): string {
    this.month += newMonth;
    if (this.month > 12) {
      this.year += 1;
      this.month -= 12;
    } else if (this.month < 1) {
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

  render(value?: HTMLElement) {
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
