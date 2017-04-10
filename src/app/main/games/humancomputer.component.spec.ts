import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumancomputerComponent } from './humancomputer.component';

describe('HumancomputerComponent', () => {
  let component: HumancomputerComponent;
  let fixture: ComponentFixture<HumancomputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumancomputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumancomputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
