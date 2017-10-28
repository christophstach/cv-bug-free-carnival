import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryCircleProgressComponent } from './jquery-circle-progress.component';

describe('JqueryCircleProgressComponent', () => {
  let component: JqueryCircleProgressComponent;
  let fixture: ComponentFixture<JqueryCircleProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryCircleProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryCircleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
