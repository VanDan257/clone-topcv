import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieclamComponent } from './vieclam.component';

describe('VieclamComponent', () => {
  let component: VieclamComponent;
  let fixture: ComponentFixture<VieclamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VieclamComponent]
    });
    fixture = TestBed.createComponent(VieclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
