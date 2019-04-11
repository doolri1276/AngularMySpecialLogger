import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!';
  // logger: MySpecialLoggerService;

  constructor(private logger: MySpecialLoggerService) {
    // 의존성 주입으로 변경
    // this.logger = new MySpecialLoggerService(LogLevel.INFO);

    // this.testLoggerLevel();
  }

  testLoggerLevel(){
    console.log("===== Default(Info) Log Level =====");
    this.logger.debug("test logging ... in debug");
    this.logger.info("test logging... in info");
    this.logger.warn("test logging... in warn");
    this.logger.error("test logging... in error");

    this.logger.logLevel = LogLevel.DEBUG;
    console.log("===== Debug Log Level =====");
    this.logger.debug("test logging ... in debug");
    this.logger.info("test logging... in info");
    this.logger.warn("test logging... in warn");
    this.logger.error("test logging... in error");

    this.logger.logLevel = LogLevel.WARN;
    console.log("===== WARN Log Level =====");
    this.logger.debug("test logging ... in debug");
    this.logger.info("test logging... in info");
    this.logger.warn("test logging... in warn");
    this.logger.error("test logging... in error");

    this.logger.logLevel = LogLevel.ERROR;
    console.log("===== ERROR Log Level =====");
    this.logger.debug("test logging ... in debug");
    this.logger.info("test logging... in info");
    this.logger.warn("test logging... in warn");
    this.logger.error("test logging... in error");
  }
}
