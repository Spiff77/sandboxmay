import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicdialogComponent } from './musicdialog.component';

describe('MusicdialogComponent', () => {
  let component: MusicdialogComponent;
  let fixture: ComponentFixture<MusicdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicdialogComponent]
    });
    fixture = TestBed.createComponent(MusicdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
