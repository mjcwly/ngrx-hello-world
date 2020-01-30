import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsTableComponent } from './greetings-table.component';

describe('GreetingsTableComponent', () => {
  let component: GreetingsTableComponent;
  let fixture: ComponentFixture<GreetingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
