import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCclNQT5FeaH92Ra98C-e41mb7FTUgbKGs",
  authDomain: "minesweeper-clone.firebaseapp.com",
  databaseURL: "https://minesweeper-clone.firebaseio.com",
  storageBucket: "minesweeper-clone.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
     AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
