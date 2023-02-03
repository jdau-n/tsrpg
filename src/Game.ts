import random from 'random';
import * as $ from 'jquery';

export default class Game {

    intervalHandle: number;

    ui: UIManager;

    init() {
        this.ui = new UIManager();
        this.ui.init();
        this.intervalHandle = window.setInterval( this.tick, 1000 );
    }

    tick() {
        //console.log( random.normal(0,10)() );
    }
}

class UIManager {

    buttonTabFight: HTMLButtonElement;

    init() {
        this.buttonTabFight = document.querySelector("#fight-button");
        
        //this.buttonTabFight.addEventListener("click", function() { this.switchTab("fight") }.bind(this) );
        this.buttonTabFight.addEventListener("click", () => { this.switchTab("fight") } );
    }

    switchTab(something: string) {
        console.log(this);
        console.log(something);
    }
}