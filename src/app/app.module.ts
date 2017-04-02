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

// Services
import { DiscService } from './service/disc.service';
import { ConnectFourService } from './service/connectfour.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        HumanHumanComponent,
        AsideComponent,
        PlaygroundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        DiscService,
        ConnectFourService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
