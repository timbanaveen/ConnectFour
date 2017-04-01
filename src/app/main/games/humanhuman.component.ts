import { Component } from '@angular/core';

import { AsideInfoModel } from '../../models/asideinfomodel';
import { DiscModel } from '../../models/discmodel';
import { GridValueTypes } from '../../constants/gridvaluetypes';
import { PlayerColors } from '../../constants/playercolors';

@Component({
    selector: 'app-game-hnh',
    templateUrl: './humanhuman.component.html'
})
export class HumanHumanComponent {
    private asideData: AsideInfoModel;
    private playgroundData: DiscModel[][];
    private chanceColor;
    private chanceIdx;

    // Intialize default values.
    constructor() {
        this.chanceIdx = Math.ceil(Math.random() * 100) % 2;
        this.chanceColor = PlayerColors[this.chanceIdx];

        // Initialize side info data.
        this.asideData = {
            playerOne: 'Player 1',
            playerTwo: 'Player 2',
            chanceIdx: this.chanceIdx
        };

        // Initialize Connect Four grid values.
        const blankValuesArr: DiscModel[] = [
            this.getBlankDisc(),
            this.getBlankDisc(),
            this.getBlankDisc(),
            this.getBlankDisc(),
            this.getBlankDisc(),
            this.getBlankDisc(),
            this.getBlankDisc()
        ]; // 7 columns

        this.playgroundData = [
            blankValuesArr,
            blankValuesArr,
            blankValuesArr,
            blankValuesArr,
            blankValuesArr,
            blankValuesArr
        ]; // 6 rows
    }

    getBlankDisc(): DiscModel {
        return {
            value: GridValueTypes.getBlank(),
            leftCount: 0,
            rightCount: 0,
            bottomCount: 0,
            topLeftCount: 0,
            topRightCount: 0,
            bottomLeftCount: 0,
            bottomRightCount: 0
        };
    }

    // toggle chance of players
    toggleChance() {
        this.chanceIdx ^= 1;
        this.asideData.chanceIdx = this.chanceIdx;
        this.chanceColor = PlayerColors[this.chanceIdx];
    }
}
