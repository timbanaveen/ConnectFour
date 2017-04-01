import { Component } from '@angular/core';

import { GameTypes } from '../constants/gametypes';
import { GameType } from '../models/gametype';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = 'Connect Four';
    gameTypes: GameType[] = GameTypes;
    selectedGame = 0;

    handleGameTypeChange(): void {
        debugger;
    }
 }
