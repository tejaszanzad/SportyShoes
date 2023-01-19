import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditProductComponent } from './add-and-edit-product.component';

describe('AddAndEditProductComponent', () => {
  let component: AddAndEditProductComponent;
  let fixture: ComponentFixture<AddAndEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
