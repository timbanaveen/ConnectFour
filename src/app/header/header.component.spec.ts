import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let comp: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            imports: [
                FormsModule
            ]
        }).compileComponents();
    }));

    // Synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        comp = fixture.componentInstance;

        fixture.detectChanges(); // trigger data bindings
    });

    it('should be initialized', () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });

    it('should have title equal to "Connect Four"', () => {
        expect(comp.title).toEqual('Connect Four');
    });

    it('should have default game types', () => {
        expect(comp.gameTypes).toEqual([
            {
                name: 'Human and Human',
                value: 0
            },
            {
                name: 'Computer and Human',
                value: 1
            }
        ]);
    });
});
