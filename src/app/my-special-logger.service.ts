import { Injectable, LogLevel } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySpecialLoggerService {
  logLevel: LogLevel;
  logs: string[] = [];
  private readonly MAX_HISTORY_CNT = 100;
  private readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS";

  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
   }

}
