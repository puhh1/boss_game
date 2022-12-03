const readlinePromises = require('node:readline/promises');
const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let GAME = [];
class Game {
    constructor(number,name,health,damage,speed) {
        this.number=number
        this.name=name;
        this.health=health;
        this.damage=damage;
        this.speed=speed;
    }
    choice_an_army(){
        console.log(shooter,swordsman,spearman)
        rl.question('выберите воинов(number and quantity separated by commas)', (number,quantity) =>{
            let numb = shooter.number || swordsman.number || spearman.number;
            let quant = [];
            if(number === Number(numb) && quantity === Number(quant)){
                GAME.push(numb * quant)
                console.log(GAME)
            }
        })
    }
    choice_an_action(){
        rl.question('хотите ударить?(y | n)', answer =>{
            if(answer === 'y'){
                win.hit()
            }
        })
    };
    hit(){

    };
    counter_strike(){

    };
}
const shooter = new Game(
    1,
    'стрелок',
    150,
    5,
    30)
const swordsman = new Game(
    2,
    'мечник',
    250,
    12,
    12)
const spearman = new Game(
    3,
    'копейщик',
    250,
    12,
    12)
const BOSS = new Game(
    4,
    'BIG RUSSIAN BOSS',
    1000,
    15,
    20
)
const win = new Game()
console.log(win.choice_an_army())