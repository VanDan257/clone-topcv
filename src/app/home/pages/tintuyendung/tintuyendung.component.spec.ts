import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintuyendungComponent } from './tintuyendung.component';

describe('TintuyendungComponent', () => {
  let component: TintuyendungComponent;
  let fixture: ComponentFixture<TintuyendungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TintuyendungComponent]
    });
    fixture = TestBed.createComponent(TintuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
