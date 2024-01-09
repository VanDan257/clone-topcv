import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongtyComponent } from './congty.component';

describe('CongtyComponent', () => {
  let component: CongtyComponent;
  let fixture: ComponentFixture<CongtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongtyComponent]
    });
    fixture = TestBed.createComponent(CongtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
