import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldsCountComponent } from './worlds-count.component';

describe('WorldsCountComponent', () => {
  let component: WorldsCountComponent;
  let fixture: ComponentFixture<WorldsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
