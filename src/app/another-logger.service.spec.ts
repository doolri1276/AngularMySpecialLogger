import { TestBed } from '@angular/core/testing';

import { AnotherLoggerService } from './another-logger.service';

describe('AnotherLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherLoggerService = TestBed.get(AnotherLoggerService);
    expect(service).toBeTruthy();
  });
});
