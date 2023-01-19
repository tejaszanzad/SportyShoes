import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditBrandComponent } from './add-and-edit-brand.component';

describe('AddAndEditBrandComponent', () => {
  let component: AddAndEditBrandComponent;
  let fixture: ComponentFixture<AddAndEditBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndEditBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
