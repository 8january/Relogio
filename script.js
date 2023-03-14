
const ponteiroHoras = document.querySelector('.ponteiro-horas');
const ponteiroMinutos = document.querySelector('.ponteiro-minutos');
const ponteiroSegundos = document.querySelector('.ponteiro-segundos');

const getTime = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
}

setInterval(() => {
    const { hours, minutes, seconds } = getTime();

    ponteiroSegundos.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    ponteiroMinutos.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    ponteiroHoras.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
}, 1000)