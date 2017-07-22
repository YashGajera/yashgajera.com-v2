import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractWithMeComponent } from './interact-with-me.component';

describe('InteractWithMeComponent', () => {
  let component: InteractWithMeComponent;
  let fixture: ComponentFixture<InteractWithMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractWithMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
