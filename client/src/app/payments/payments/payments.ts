import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Payment } from '../../_models/payment';
import { PaymentService } from '../../_services/payment.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payments',
  imports: [CommonModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css'
})
export class Payments implements OnInit {

  payments$: Observable<Payment[]>;


  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) {
    this.payments$ = this.paymentService.getPayments();
  }

  ngOnInit(): void {
  }


  // loadPayments(): void {
  //   this.paymentService.getPayments().subscribe({
  //     next: (payments) => this.payments = payments,
  //     error: (error) => console.error('Error loading payments:', error)
  //   });


}



