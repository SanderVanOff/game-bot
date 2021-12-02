// "Загадывание случайного числа от 1 до 100"
const bot = function(){
    const n = Math.round(Math.random() * 100);
    function game(){
        let answer = +prompt('Угадай число от 1 до 100');
        console.log(n);
        if(answer === 0) {
            alert("Игра окончена");
            return;
        } else if(answer > n) {
            alert("Загаданное число меньше");
            game();
        } else if (answer < n) {
            alert("Загаданное число больше");
            game();
        } else if(isNaN(answer)) {
            alert("Введи число!");
            game();
        } else if( answer === n) {
            alert( "Поздравляю, Вы угадали!!!");
            return;
        }
    }
    game();
};

bot();