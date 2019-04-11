import { Component, OnInit, Input, Host, Optional } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';
import { LoggerService } from '../logger-service';
import { AnotherLoggerService } from '../another-logger.service';

import { LOG_LEVEL_TOKEN } from '../tokens';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  // providers: [MySpecialLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG}]
})
//ng g component mouse-track-zone
export class MouseTrackZoneComponent implements OnInit {
  // @Input() private logger: MySpecialLoggerService; //싱글턴 사용으로 변경됨
  // logLevel: LogLevel = LogLevel.INFO; //애플리케이션에서 사용할 로그 레벨
  // logger: MySpecialLoggerService;     //로그 출력으로 사용할 로거인 MySpecialLoggerService
  
  logger: LoggerService;

  constructor(
        @Host() @Optional() mySpecialLogger: MySpecialLoggerService,
        anotherLogger: AnotherLoggerService
    ) {

    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;

  // constructor(private logger: MySpecialLoggerService) {
    // this.logger = new MySpecialLoggerService(this.logLevel);
  }

  ngOnInit() {
  }

  captureMousePos($event: MouseEvent){
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x : ${pos[0]}, y : ${pos[1]}`);
  }

}
