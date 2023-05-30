import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryParentComponent } from './secondary-parent.component';

describe('SecondaryParentComponent', () => {
  let component: SecondaryParentComponent;
  let fixture: ComponentFixture<SecondaryParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryParentComponent]
    });
    fixture = TestBed.createComponent(SecondaryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
