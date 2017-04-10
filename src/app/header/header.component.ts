import { Component, Input, Output, EventEmitter } from '@angular/core';

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

    @Input() selectedGame;
    @Output() gameChanged = new EventEmitter();

    handleGameTypeChange(): void {
        this.gameChanged.emit(this.selectedGame);
    }
 }
