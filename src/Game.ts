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

class Enemy {
    health: number;
    currentHealth: number;
    damage: number;
    defence: number;
    dodge: number;
    block: number;
    speed: number;

    genStats( powerLevel:number ) {
        
    }
}

class UIManager {

    buttonTabTown: HTMLButtonElement;
    buttonTabAdventure: HTMLButtonElement;
    buttonTabInventory: HTMLButtonElement;
    
    buttonTabOptions: HTMLButtonElement;
    tabTown: HTMLElement;
    tabAdventure: HTMLElement;
    tabInventory: HTMLElement;
    tabOptions: HTMLElement;

    init() {
        this.buttonTabTown = document.querySelector("#town-button");
        this.buttonTabTown.addEventListener("click", () => this.switchTab("town") );

        this.buttonTabAdventure = document.querySelector("#adventure-button");
        this.buttonTabAdventure.addEventListener("click", () => this.switchTab("adventure") );

        this.buttonTabInventory = document.querySelector("#inventory-button");
        this.buttonTabInventory.addEventListener("click", () => this.switchTab("inventory") );
        
        this.buttonTabOptions = document.querySelector("#options-button");
        this.buttonTabOptions.addEventListener("click", () => this.switchTab("options") );

        this.tabTown = document.querySelector("#town-tab");
        this.tabAdventure = document.querySelector("#adventure-tab");
        this.tabInventory = document.querySelector("#inventory-tab");
        this.tabOptions = document.querySelector("#options-tab");
    }
    
    switchTab(tabName: string) {
        console.log(this);
        console.log(tabName);

        this.tabTown.classList.add("hide");
        this.tabAdventure.classList.add("hide");
        this.tabInventory.classList.add("hide");
        this.tabOptions.classList.add("hide");

        switch (tabName) {
            case "town":
            default:
                this.tabTown.classList.remove("hide");
                break;

            case "adventure":
                this.tabAdventure.classList.remove("hide");
                break;

            case "inventory":
                this.tabInventory.classList.remove("hide");
                break;

            case "options":
                this.tabOptions.classList.remove("hide");
                break;
        }
    }
}