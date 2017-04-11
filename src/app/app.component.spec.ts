import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HumanHumanComponent } from './main/games/humanhuman.component';
import { HumancomputerComponent } from './main/games/humancomputer.component';
import { PlaygroundComponent } from './main/playground/playground.component';
import { AsideComponent } from './main/aside/aside.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                MainComponent,
                HumanHumanComponent,
                AsideComponent,
                PlaygroundComponent,
                HumancomputerComponent
            ],
            imports: [
                BrowserModule,
                FormsModule
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
