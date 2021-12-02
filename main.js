// "Загадывание случайного числа от 1 до 100"
const bot = function(){
    const n = Math.round(Math.random() * 100);
    let count = 10;
    function game(){
        let answer = +prompt('Угадай число от 1 до 100');
        if(count <= 1) {
            let isRepeat = confirm("Попытки закончились, хотите сыграть еще?")
            isRepeat ? bot() : answer = 0;
        } else if(answer === 0) {
            alert("Игра окончена");
            return;
        } else if(answer > n) {
            count--;
            alert(`Загаданное число меньше, осталось попыток ${count}`);
            game();
        } else if (answer < n) {
            count--;
            alert(`Загаданное число больше, осталось попыток ${count}`);
            game();
        } else if(isNaN(answer)) {
            alert("Введи число!");
            game();
        } else if( answer === n) {
            let isRepeat = confirm( "Поздравляю, Вы угадали!!!, Хотели бы сыграть еще?");
            isRepeat ? bot() : answer = 0;
            // return;
        }
    }
    game();
};

bot();