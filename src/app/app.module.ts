import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HumanHumanComponent } from './main/games/humanhuman.component';
import { AsideComponent } from './main/aside/aside.component';
import { PlaygroundComponent } from './main/playground/playground.component';
import { HumancomputerComponent } from './main/games/humancomputer.component';

// Services
import { DiscService } from './service/disc.service';
import { ConnectFourService } from './service/connectfour.service';
import { MinmaxService } from './service/minmax.service';

@NgModule({
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
        FormsModule,
        HttpModule
    ],
    providers: [
        DiscService,
        ConnectFourService,
        MinmaxService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
