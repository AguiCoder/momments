import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtFormComponent } from './dt-form.component';

describe('DtFormComponent', () => {
  let component: DtFormComponent;
  let fixture: ComponentFixture<DtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
