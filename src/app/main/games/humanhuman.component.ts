import { Component, Output, Input, EventEmitter } from '@angular/core';

import { AsideInfoModel } from '../../models/asideinfomodel';
import { DiscModel } from '../../models/discmodel';
import { DiscTypes } from '../../constants/disctypes.enum';
import { PlayerColors } from '../../constants/playercolors';

import { DiscService } from '../../service/disc.service';
import { ConnectFourService } from '../../service/connectfour.service';

@Component({
    selector: 'app-game-hnh',
    templateUrl: './humanhuman.component.html'
})
export class HumanHumanComponent {
    private _connectFourService;
    private _discService;
    private asideData: AsideInfoModel;
    private playgroundData: DiscModel[][];
    private chanceColor;
    private chanceIdx;

    @Input() gameId;
    @Output() gameCompleted = new EventEmitter();

    /**
     * Intialize default values.
     */
    constructor(
        discService: DiscService,
        connectFourService: ConnectFourService
    ) {
        this._connectFourService = connectFourService;
        this._discService = discService;

        this.initGame();

        // Subscribe to events from connectfour service.
        // Dispose on view destruction.
        const subscription = this._connectFourService.discAdded$.subscribe(
            (msg) => {
                if (msg === 'Won') {
                    setTimeout(() => {
                        alert(`Player ${this.chanceIdx + 1} Won!!!`);
                        this.initGame();
                    }, 10); // waiting for ng to complete layout.
                } else if (msg === 'Draw') {
                    alert('Match Draw');
                } else {
                    this.toggleChance();
                    console.log('disc added');
                }
            },
            () => {
                console.log('error while adding disc');
            },
            () => {}
        );
    }

    /**
     * Init Game
     */
    private initGame() {
        this.initChance();
        this.initAsideData();
        this.initplayGroundData();
    }

    /**
     * Selects chance randomly.
     */
    private initChance() {
        // select chance on random.
        this.chanceIdx = Math.ceil(Math.random() * 100) % 2;
        this.chanceColor = PlayerColors[this.chanceIdx];
    }

    /**
     * Initialize side info data.
     */
    private initAsideData() {
        this.asideData = {
            playerOne: 'Player 1',
            playerTwo: 'Player 2',
            chanceIdx: this.chanceIdx
        };
    }

    /**
     * Initialize Connect Four grid values.
     */
    private initplayGroundData() {
        this.playgroundData = [];
        for (let i = 0; i < 6; i++) {
            this.playgroundData[i] = [];
            for (let j = 0; j < 7; j++) {
                this.playgroundData[i][j] = this._discService.getDisc(DiscTypes.Blank);
            }
        }
    }

    /**
     * Listens to event from child component for disc addition.
     * @param colIdx Index of column where disc is added
     */
    handleDiscAddition(colIdx) {
        this._connectFourService.addDisc(colIdx, this.chanceColor, this.playgroundData);
    }

    /**
     * Toggles chance of players for next move.
     */
    toggleChance() {
        this.chanceIdx ^= 1;
        this.asideData.chanceIdx = this.chanceIdx;
        this.chanceColor = PlayerColors[this.chanceIdx];
    }
}
