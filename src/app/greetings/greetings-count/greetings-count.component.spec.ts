import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsCountComponent } from './greetings-count.component';

describe('GreetingsCountComponent', () => {
  let component: GreetingsCountComponent;
  let fixture: ComponentFixture<GreetingsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
