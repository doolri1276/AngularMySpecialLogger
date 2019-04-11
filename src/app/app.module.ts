import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';
import { LOG_LEVEL_TOKEN } from './tokens';

@NgModule({
  declarations: [
    AppComponent,
    MouseTrackZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //의존성 주입
  providers: [
    MySpecialLoggerService,
    {
      // provide: 'logLevel',
      provide:  LOG_LEVEL_TOKEN,
      useValue: LogLevel.INFO
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
