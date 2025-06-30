
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Payment } from '../../_models/payment';
import { Vendor } from '../../_models/vendor';
import { VendorService } from '../../_services/vendor.service';
import { get } from 'http';
import { debounceTime, distinctUntilChanged, filter, map, Observable, OperatorFunction } from 'rxjs';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-payment-add',
  imports: [CommonModule, FormsModule, NgbTypeaheadModule, ReactiveFormsModule  ],
  templateUrl: './payment-add.html',
  styleUrl: './payment-add.css'
})
export class PaymentAdd implements OnInit {
  payment: Partial<Payment> = {};
  vendors: Vendor[] = [];
  paymentForm!: FormGroup;
  selectedFile: File | null = null;


  projectNames = ['Project X', 'Project Y', 'Project Z'];
  corporationNames = ['Corp 1', 'Corp 2', 'Corp 3'];
  vendorFormatter = (vendor: Vendor) => vendor.name;
  submitted: boolean = false;



  constructor(private vendorService: VendorService, private fb: FormBuilder
  ) { }
  ngOnInit(): void {

    this.paymentForm = this.fb.group({
      date: ['', Validators.required],
      checkNumber: [''],
      paymentAmount: ['', Validators.required],
      depositAmount: [''],
      notes: [''],
      mode: [''],
      vendorName: ['', Validators.required],
      projectName: ['', Validators.required],
      corporationName: ['', Validators.required],
      attachment: [null]
    });

    this.getVendors();


  }


  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.paymentForm.patchValue({ attachment: file });
    }
  }


  // Typeahead search for vendors
  search: OperatorFunction<string, readonly { id: number; name: string }[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) => this.vendors.filter((vendor) => new RegExp(term, 'mi').test(vendor.name)).slice(0, 10)),
    );




  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.invalid) return;

    // Prepare form data for submission (especially if file upload is needed)
    const formData = new FormData();
    Object.entries(this.paymentForm.value).forEach(([key, value]) => {
      if (key === 'attachment' && this.selectedFile) {
        formData.append(key, this.selectedFile);
      } else {
        //formData.append(key, value ?? '');
      }
    });

    // Submit formData to your API
    console.log('Form submitted:', this.paymentForm.value);
  }

  getVendors() {
    this.vendorService.getVendors().subscribe({
      next: (vendors) => {
        this.vendors = vendors;
        console.log('Vendors loaded:', this.vendors);
      },
      error: (error) => {
        console.error('Error loading vendors:', error);
      }
    });
  }
  get f() { return this.paymentForm.controls; }

}
