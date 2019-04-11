import { Component, OnInit, Input } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
//ng g component mouse-track-zone
export class MouseTrackZoneComponent implements OnInit {
  // @Input() private logger: MySpecialLoggerService; //싱글턴 사용으로 변경됨
  // logLevel: LogLevel = LogLevel.INFO; //애플리케이션에서 사용할 로그 레벨
  // logger: MySpecialLoggerService;     //로그 출력으로 사용할 로거인 MySpecialLoggerService

  constructor(private logger: MySpecialLoggerService) {
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
