import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhatuyendungComponent } from './nhatuyendung.component';

describe('NhatuyendungComponent', () => {
  let component: NhatuyendungComponent;
  let fixture: ComponentFixture<NhatuyendungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhatuyendungComponent]
    });
    fixture = TestBed.createComponent(NhatuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
