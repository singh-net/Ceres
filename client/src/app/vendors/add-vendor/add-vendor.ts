import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VendorService } from '../../_services/vendor.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Vendor } from '../../_models/vendor';

@Component({
  selector: 'app-add-vendor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-vendor.html',
  styleUrl: './add-vendor.css',
})
export class AddVendor implements OnInit {
  @Input() vendor: Vendor | null = null;
  @Input() isEdit = false;
  vendorForm: FormGroup;
  submitted = false;
  error: string | null = null;
  toastr = inject(ToastrService);

  constructor(
    private fb: FormBuilder,
    private vendorService: VendorService,
    private router: Router
  ) {
    this.vendorForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      balance: [
        0,
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });
  }
  ngOnInit(): void {
    if (this.isEdit && this.vendor) {
      this.vendorForm.patchValue(this.vendor);
    }
  }

  get f() {
    return this.vendorForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = null;
    if (this.vendorForm.invalid) return;

    if (this.isEdit && this.vendor) {
      const updatedVendor: Vendor = {
        ...this.vendorForm.value,
        id: this.vendor.id,
      };
      this.vendorService
        .updateVendor(this.vendor.id, updatedVendor)
        .subscribe({
          next: () => {
            this.toastr.success('Vendor Updated');
            // Close modal
            (window as any).ngbModalRef?.close();
          },
          error: (err) => console.log(err),
          // error: (err) => this.toastr.error(err.error),
        });
    } else {
      this.vendorService.createVendor(this.vendorForm.value).subscribe({
        next: () => this.toastr.success('Vendor Added'),
        error: (err) => this.toastr.error(err.error),
      });
    }
  }
}
