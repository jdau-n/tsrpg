import random from 'random';

export default class Game {

    intervalHandle: number;

    init() {
        this.intervalHandle = window.setInterval( this.tick, 1000 );
    }

    tick() {
        console.log( random.normal(0,10)() );
    }
}