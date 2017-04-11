import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { PlaygroundComponent } from './playground.component';
import { DiscService } from '../../service/disc.service';
import { DiscTypes } from '../../constants/disctypes.enum';

describe('PlaygroundComponent', () => {
    let comp: PlaygroundComponent;
    let fixture: ComponentFixture<PlaygroundComponent>;
    let discService: DiscService;
    let rowCount;
    let colCount;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PlaygroundComponent
            ]
        }).compileComponents();
    }));

    // Synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(PlaygroundComponent);
        comp = fixture.componentInstance;
        discService = new DiscService();
        rowCount = 6;
        colCount = 7;

        comp.gridData = [];
        for (let i = 0; i < rowCount; i++) {
            comp.gridData[i] = [];
            for (let j = 0; j < colCount; j++) {
                comp.gridData[i][j] = discService.getDisc(DiscTypes.Blank);
            }
        }

        comp.psuedoDiscs = [];
        for (let i = 0; i < colCount; i++) {
            comp.psuedoDiscs[i] = discService.getDisc(DiscTypes.Blank);
        }

        fixture.detectChanges(); // trigger data bindings
    });

    it('should be initialized', () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });

    it('should have correct amount of psuedo cells', () => {
        expect(fixture
                .nativeElement
                .querySelectorAll('.psuedo-grid-cell').length).toEqual(colCount);
    });

    it('should have correct amount of grid rows', () => {
        expect(fixture
                .nativeElement
                .querySelectorAll('.grid-row:not(.disc-image)').length).toEqual(rowCount);
    });

    it('should have correct amount of grid cells', () => {
        expect(fixture
                .nativeElement
                .querySelectorAll('.grid-cell').length).toEqual(42);
    });
});
