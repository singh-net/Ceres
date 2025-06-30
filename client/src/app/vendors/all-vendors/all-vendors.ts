import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VendorService } from '../../_services/vendor.service';
import { Vendor } from '../../_models/vendor';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddVendor } from '../add-vendor/add-vendor';

@Component({
  selector: 'app-all-vendors',
  imports: [RouterLink, CommonModule],
  templateUrl: './all-vendors.html',
  styleUrl: './all-vendors.css',
})
export class AllVendors implements OnInit {
  vendors: Vendor[] = [];
  vendors$: Observable<Vendor[]>;

  loading = false;

  constructor(private vendorService: VendorService, private modalService: NgbModal) {
    this.vendors$ = this.vendorService.getVendors();
  }
  ngOnInit(): void {
    //this.loadVendors();
  }

  loadVendors() {
    this.loading = true;
    this.vendorService.getVendors().subscribe({
      next: (vendors) => {
        this.vendors = vendors;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  // deleteVendor(id: number) {
  //   if (confirm('Are you sure you want to delete this vendor?')) {
  //     this.vendorService.deleteVendor(id).subscribe({
  //       next: () => this.loadVendors(),
  //     });
  //   }
  // }

  updateVendor(vendor: Vendor) {


    const modalRef = this.modalService.open(AddVendor, { size: 'lg' });
    modalRef.componentInstance.vendor = { ...vendor }; // Pass a copy to avoid direct mutation
    modalRef.componentInstance.isEdit = true;

    modalRef.closed.subscribe(() => {
      // Refresh the vendor list after closing modal
      this.vendors$ = this.vendorService.getVendors();
    });




    
  }
}
