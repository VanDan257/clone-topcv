import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TongquanComponent } from './tongquan.component';

describe('TongquanComponent', () => {
  let component: TongquanComponent;
  let fixture: ComponentFixture<TongquanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TongquanComponent]
    });
    fixture = TestBed.createComponent(TongquanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
