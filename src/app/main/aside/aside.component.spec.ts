import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AsideComponent } from './aside.component';
import { AsideInfoModel } from '../../models/asideinfomodel';

describe('AsideComponent', () => {
    let comp: AsideComponent;
    let fixture: ComponentFixture<AsideComponent>;
    let asideData: AsideInfoModel;

    // this shluld be async ?
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AsideComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AsideComponent);
        comp = fixture.componentInstance;

        asideData = {
            playerOne: 'player One',
            playerTwo: 'player Two',
            chanceIdx: 0
        };

        comp.data = asideData;

        fixture.detectChanges();
    });

    it('should be initialized', () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });

    it('should list player names', () => {
        expect(fixture
                .nativeElement
                .querySelector('.playerone')
                .textContent
                .trim()).toEqual('player One');

        expect(fixture
                .nativeElement
                .querySelector('.playertwo')
                .textContent
                .trim()).toEqual('player Two');
    });
});
