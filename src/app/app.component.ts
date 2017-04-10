import { Component } from '@angular/core';

import { GameType } from './models/gametype';
import { GameTypes } from './constants/gametypes';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedGame: GameType;

    constructor () {
        // defualt value.
        this.selectedGame = GameTypes[0];
    }

    handleGameChange(gameIdx) {
        this.selectedGame = GameTypes[gameIdx];
    }
}
