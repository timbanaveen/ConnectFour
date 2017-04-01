import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
    @Input() data;
    @Input() chanceColor;
    @Output() onDiscAddition = new EventEmitter();

    private _selectedCls = 'selected';
    psuedoDiscs;

    ngOnInit() {
        // by default selected and class will bank
        this.psuedoDiscs = this.data[0];
    }

    handleClick(item, i, j) {
        this.onDiscAddition.emit();
    }

    handleMouseEnter(item, index) {
        this.psuedoDiscs[index].selected = this._selectedCls;
    }

    handleMouseLeave(item, index) {
        this.psuedoDiscs[index].selected = '';
    }
}
