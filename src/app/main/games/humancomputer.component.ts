import { Component, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AsideInfoModel } from '../../models/asideinfomodel';
import { DiscModel } from '../../models/discmodel';
import { DiscTypes } from '../../constants/disctypes.enum';
import { PlayerColors } from '../../constants/playercolors';

import { DiscService } from '../../service/disc.service';
import { ConnectFourService } from '../../service/connectfour.service';
import { MinmaxService } from '../../service/minmax.service';

@Component({
    selector: 'app-humancomputer',
    templateUrl: './humancomputer.component.html'
})
export class HumancomputerComponent implements OnDestroy {
    private _connectFourService: ConnectFourService;
    private _discService: DiscService;
    private _minMaxService: MinmaxService;
    private asideData: AsideInfoModel;
    private playgroundData: DiscModel[][];
    private playgroundPsuedoDiscs: DiscModel[];
    private chanceColor;
    private chanceIdx;
    private subscription: Subscription;

    @Input() gameId;
    @Output() gameCompleted = new EventEmitter();

    /**
     * Intialize default values.
     */
    constructor(
        discService: DiscService,
        connectFourService: ConnectFourService,
        minMaxService: MinmaxService
    ) {
        this._connectFourService = connectFourService;
        this._discService = discService;
        this._minMaxService = minMaxService;

        this.initGame();

        // Subscribe to events from connectfour service.
        // Dispose on view destruction.
        this.subscription = this._connectFourService.discAdded$.subscribe(
            (msg) => {
                if (msg === 'Won') {
                    const winner = this.chanceIdx ? 'Computer' : 'Player';
                    setTimeout(() => {
                        alert(`${winner} wins the game!!!`);
                        this.initGame();
                    }, 10); // waiting for completing layout.
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    /**
     * Init Game
     */
    private initGame() {
        this.initChance();
        this.initAsideData();
        this.initplayGroundData();

        this._minMaxService.initMinMax();
    }

    /**
     * Selects chance randomly.
     */
    private initChance() {
        // select chance on random.
        this.chanceIdx = 0; // this.id() % 2;
        this.chanceColor = PlayerColors[this.chanceIdx];
    }

    /**
     * Initialize side info data.
     */
    private initAsideData() {
        this.asideData = {
            playerOne: 'Player',
            playerTwo: 'Computer',
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

        this.playgroundPsuedoDiscs = [];
        for (let i = 0; i < 7; i++) {
            this.playgroundPsuedoDiscs[i] = this._discService.getDisc(DiscTypes.Blank);
        }
    }

    private id() {
        return Math.ceil(Math.random() * 100);
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

        // if computer's chance get position.
        if (this.chanceIdx === 1) {
            this.handleDiscAddition(
                this._minMaxService.getBestcolumn()
            );
        }
    }

}
