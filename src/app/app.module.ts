import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvancedComponent } from './advanced/advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BeginnerComponent,
    IntermediateComponent,
    AdvancedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
