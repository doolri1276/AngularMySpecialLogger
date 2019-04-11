import { Injectable } from '@angular/core';
import { LogLevel } from './log-level.enum';

@Injectable({
  providedIn: 'root'
})
export class MySpecialLoggerService {

  //타입스크립트는 접근제한자 public이 기본이다.
  logLevel: LogLevel;                       //현재 서비스에 설정한 로그 레벨
  logs: string[] = [];                      //속성은 과거 로그를 보관
  //readonly : 선언부/생성자 안에서만 값 할당 가능, 이후에는 읽기만 가능
  private readonly MAX_HISTORY_CNT = 100;   //보관할 로그의 최대 수
  private readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS";  //로그를 출력할 때 함께 출력할 시간의 포멧 정보

  //js의 Date객체는 기본 API에서 포멧터를 지원하지 않으므로
  //로그 시간을 포멧터에 따라 출력하기 위해 date-fns 패키지 설치
  //npm i --save date-fns

  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

}
