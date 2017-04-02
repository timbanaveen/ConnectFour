import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PlayerColors } from '../../constants/playercolors';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
    @Input() data;
    @Input() chanceColor;
    @Output() onDiscAddition = new EventEmitter();

    psuedoDiscs;

    ngOnInit() {
        // by default selected and class will bank
        this.psuedoDiscs = this.data[0];
    }

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
