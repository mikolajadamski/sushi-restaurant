import { TestBed } from '@angular/core/testing';

import { NavbarItemService } from './navbar-item.service';

describe('NavbarItemService', () => {
  let service: NavbarItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
