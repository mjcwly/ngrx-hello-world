import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetWorldComponent } from './greet-world.component';

describe('GreetWorldComponent', () => {
  let component: GreetWorldComponent;
  let fixture: ComponentFixture<GreetWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
