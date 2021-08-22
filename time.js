const time = document.querySelector(".js-time");

const ArrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const setTimeFormat = (num) => {
    //10보다 작으면 앞에 0 붙이기
    const temp = num > 9 ? num : `0${num}`;
    return temp;
} ;

const updateTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    time.innerText = ` at ${setTimeFormat(hour)}:${setTimeFormat(minute)}:${setTimeFormat(second)} ${ArrMonth[month]} ${setTimeFormat(day)}, ${setTimeFormat(year)}.`; 
    //~이랑 같이 있는거, 달러 중괄호랑 하면 js 코드와 같이 쓸 수 있음
};

const init = () => {
    // 1000 == 1
    setInterval(updateTime, 1000); // 1초마다 함수 실행 (msec 사용)
};

init();
