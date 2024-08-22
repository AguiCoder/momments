import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtDatepickerComponent } from './dt-datepicker.component';

describe('DtDatepickerComponent', () => {
  let component: DtDatepickerComponent;
  let fixture: ComponentFixture<DtDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtDatepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DtDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
