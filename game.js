const GAME = [];
class Game {
    constructor(name,health,damage,speed) {
        this.name=name;
        this.health=health;
        this.damage=damage;
        this.speed=speed;
    }

    hit(health,speed){

    };
    counterstrike(health,speed){

    };
    get army(){
        const army = new Map()

    }
}
const shooter = new Game(
    'стрелок',
    150,
    5,
    30);
const swordsman = new Game(
    'мечник',
    250,
    12,
    12);
const spearman = new Game(
    'копейщик',
    250,
    12,
    12);
const BOSS = new Game(
    'BIG RUSSIAN BOSS',
    1000,
    15,
    20,
)