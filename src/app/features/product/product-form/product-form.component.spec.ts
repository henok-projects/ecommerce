import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormComponent } from './product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.productForm.value).toEqual({ name: '', price: '' });
  });

  it('should patch the form with product data in edit mode', () => {
    const product = { name: 'Test Product', price: 100 };
    component.product = product;
    component.isEditMode = true;
    component.ngOnInit();
    expect(component.productForm.value).toEqual(product);
  });

  it('should validate the form as invalid when empty', () => {
    expect(component.productForm.valid).toBeFalsy();
  });

  it('should validate the form as valid when filled', () => {
    component.productForm.setValue({ name: 'Test Product', price: 100 });
    expect(component.productForm.valid).toBeTruthy();
  });

  it('should call onSubmit when the form is submitted', () => {
    jest.spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should log form value when submitted', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    component.productForm.setValue({ name: 'Test Product', price: 100 });
    component.onSubmit();
    expect(consoleSpy).toHaveBeenCalledWith('Form Submitted:', { name: 'Test Product', price: 100 });
  });
});
