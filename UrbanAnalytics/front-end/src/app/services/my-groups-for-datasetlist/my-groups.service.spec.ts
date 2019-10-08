import { TestBed } from '@angular/core/testing';

import { MyGroupsService } from './my-groups.service';

describe('MyGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyGroupsService = TestBed.get(MyGroupsService);
    expect(service).toBeTruthy();
  });
});
