import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UngvienComponent } from './ungvien.component';

describe('UngvienComponent', () => {
  let component: UngvienComponent;
  let fixture: ComponentFixture<UngvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UngvienComponent]
    });
    fixture = TestBed.createComponent(UngvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
