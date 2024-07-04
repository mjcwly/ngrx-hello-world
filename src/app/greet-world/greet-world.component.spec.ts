import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetWorldComponent } from './greet-world.component';

describe('GreetWorldComponent', () => {
  let component: GreetWorldComponent;
  let fixture: ComponentFixture<GreetWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
