//DOM요소 가져오기 
const alarm = document.querySelector('.js_alarm');
const currentTime = document.querySelector('.js_alarm h1');
const setTime = document.querySelector('.alarm_time');
const bgColor = document.querySelector('body');

// 배경색 설정 함수
function setbgColor() {
    if (bgColor.classList == false) {
        bgColor.classList.add('red');
    } else {
        bgColor.classList.remove('red');
    }
};



// 알람시간 설정 함수
function getAlarm() {
    const setValue = setTime.value;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const current = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    if (setValue === current) {
        setbgColor();
    }
};


//현재시간 설정 함수 
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // 두라지수를 만들기 위해 따로 함수를 정의하지 않고 삼항연산자를 이용하여 바로 정의 
    currentTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};


function init() {
    setInterval(() => {
        getTime();
    }, 1000);
    setInterval(() => {
        getAlarm();
    }, 1000);

}

//함수 호출
init();








