import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {
    gameId = 1;

    @Input() selectedGame;

    reInitGame() {
        this.gameId++;
    }
}
