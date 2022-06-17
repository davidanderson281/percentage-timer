import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RemoveTwelveFromTimePipe } from './remove-twelve-from-time.pipe';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    RemoveTwelveFromTimePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTooltipModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleFontSize: "60",
      unitsFontSize: "60",
      subtitleFontSize: "40",
      subtitle: "Shift completed"
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RemoveTwelveFromTimePipe]
})
export class AppModule { }
