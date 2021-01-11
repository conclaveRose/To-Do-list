//DOM요소 가져오기 
const alarm = document.querySelector('.js_alarm');
const currentTime = document.querySelector('.js_alarm h1');

//시간단위를 한자리에서  두자리로 만들어 주는 함수 
function addZero(num, digit) {
    let zero = '';
    num = num.toString();
    if (num.length < digit) {
        zero += '0';
    }
    return zero + num;
}





//날짜 정보를 얻어오는 함수 정의 
function getTime() {
    const date = new Date();
    const hours = addZero(date.getHours(), 2);
    const minutes = addZero(date.getMinutes(), 2);
    const seconds = addZero(date.getSeconds(), 2);
    currentTime.innerText = `${hours}:${minutes}:${seconds}`;
};

//1초마다 getTime()을 콜백한다. 
setInterval(() => {
    getTime();
}, 1000);


// 시간정보를 가져오는 함수, getTime()을 콜백하는 함수를 변수init에 할당 



// 함수호출  