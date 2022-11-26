const readline = require('readline');
let GAME = [];
class Game {
    constructor(number,name,health,damage,speed) {
        this.number=number
        this.name=name;
        this.health=health;
        this.damage=damage;
        this.speed=speed;
    }

    hit(){

    };
    counterstrike(){

    };
}
const shooter = new Game(
    1,
    'стрелок',
    150,
    5,
    30);
const swordsman = new Game(
    2,
    'мечник',
    250,
    12,
    12);
const spearman = new Game(
    3,
    'копейщик',
    250,
    12,
    12);
const BOSS = new Game(
    4,
    'BIG RUSSIAN BOSS',
    1000,
    15,
    20,
)
const win = new Game()
console.log(BOSS.hit)