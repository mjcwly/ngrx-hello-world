import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsButtonsComponent } from './worlds-buttons.component';

describe('GreetingsButtonsComponent', () => {
  let component: GreetingsButtonsComponent;
  let fixture: ComponentFixture<GreetingsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingsButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
