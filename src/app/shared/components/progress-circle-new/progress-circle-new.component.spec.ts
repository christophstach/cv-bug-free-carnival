import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCircleNewComponent } from './progress-circle-new.component';

describe('ProgressCircleNewComponent', () => {
  let component: ProgressCircleNewComponent;
  let fixture: ComponentFixture<ProgressCircleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressCircleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCircleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
