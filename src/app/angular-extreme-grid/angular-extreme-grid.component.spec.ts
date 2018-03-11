import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExtremeGridComponent } from './angular-extreme-grid.component';

describe('AngularExtremeGridComponent', () => {
  let component: AngularExtremeGridComponent;
  let fixture: ComponentFixture<AngularExtremeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularExtremeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularExtremeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
