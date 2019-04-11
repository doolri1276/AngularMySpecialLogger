import { Injectable, Inject } from '@angular/core';
import { LogLevel } from './log-level.enum';

import * as format from 'date-fns/format';
import { LOG_LEVEL_TOKEN } from './tokens';

//상속받아서 처리
import { LoggerService } from './logger-service';

@Injectable({
  providedIn: 'root'
})
//ng g service my-special-logger
export class MySpecialLoggerService extends LoggerService{

  //타입스크립트는 접근제한자 public이 기본이다.
  logLevel: LogLevel;                       //현재 서비스에 설정한 로그 레벨
  logs: string[] = [];                      //속성은 과거 로그를 보관
  //readonly : 선언부/생성자 안에서만 값 할당 가능, 이후에는 읽기만 가능
  private readonly MAX_HISTORY_CNT = 100;   //보관할 로그의 최대 수
  private readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS";  //로그를 출력할 때 함께 출력할 시간의 포멧 정보

  //js의 Date객체는 기본 API에서 포멧터를 지원하지 않으므로
  //로그 시간을 포멧터에 따라 출력하기 위해 date-fns 패키지 설치
  //npm i --save date-fns

  constructor(@Inject(LOG_LEVEL_TOKEN)logLevel: LogLevel) {
    super(logLevel);
  }


  log(logLevel: LogLevel, msg: string){
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if(this.isProperLogLevel(logLevel)){
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }

  private keepLogHistory(log:string){
    if(this.logs.length === this.MAX_HISTORY_CNT){
      this.logs.shift();
    }
    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string){
    //format()을 사용하기 위해 date-fns를 import했음
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }

}
