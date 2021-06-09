const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => colors[randomIntegerFromInterval(0, colors.length - 1)];
const randomizeBackgroundColor = () => bodyStyle.backgroundColor = randomColor();
const bodyStyle = document.body.style;
const startBtn = document.querySelector('button[data-action="start"]')
const stopBtn = document.querySelector('button[data-action="stop"]')

let intervalID = null;

startBtn.addEventListener('click', () => {
    if (intervalID !== null) {
        return
    }
    intervalID = setInterval(randomizeBackgroundColor, 1000)
})


stopBtn.addEventListener('click', () => {
    if (intervalID) {
        clearInterval(intervalID)
        intervalID = null;
    } 
})






