import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NGTrisModule } from '../ngtris/ngtris.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NGTrisModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
