setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand,hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);

}

//CREATE A FUNCTION THAT SWITCHES COLOR BASED ON THE TIME OF MORNING[] NOON[12-18] AND NIGHT/DARK[19-4] 
function changeBackgroundColor() {
    const noonTime = new Date().getHours();

    switch(noonTime) {

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        document.body.classList.toggle('noon');
        break;

        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 1:
        case 2:
        case 3:
        case 4:
        document.body.classList.toggle('dark');
        break;
        
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 15:
        document.body.classList.toggle('morning');
        break;
    }
}

setClock();
changeBackgroundColor();