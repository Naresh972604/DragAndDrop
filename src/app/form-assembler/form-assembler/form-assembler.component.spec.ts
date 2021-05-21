import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssemblerComponent } from './form-assembler.component';

describe('FormAssemblerComponent', () => {
  let component: FormAssemblerComponent;
  let fixture: ComponentFixture<FormAssemblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAssemblerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAssemblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
