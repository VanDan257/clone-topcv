import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaicvComponent } from './loaicv.component';

describe('LoaicvComponent', () => {
  let component: LoaicvComponent;
  let fixture: ComponentFixture<LoaicvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaicvComponent]
    });
    fixture = TestBed.createComponent(LoaicvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
