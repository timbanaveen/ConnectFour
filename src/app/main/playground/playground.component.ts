import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerColors } from '../../constants/playercolors';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
    @Input() id;
    @Input() gridData;
    @Input() psuedoDiscs;
    @Input() chanceColor;
    @Output() onDiscAddition = new EventEmitter();

    getGridDiscClass(colorIdx) {
        return PlayerColors[colorIdx];
    }

    handleClick(item, i, j) {
        this.onDiscAddition.emit(j);
    }

    handleMouseEnter(item, index) {
        this.psuedoDiscs[index].active = 'active';
    }

    handleMouseLeave(item, index) {
        this.psuedoDiscs[index].active = '';
    }

    handleBlur(item, index) {
        this.psuedoDiscs[index].active = '';
    }
}
