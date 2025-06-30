import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../_models/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  private baseUrl = 'http://localhost:5147/api/payments'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl);
  }



  getPayment(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.baseUrl}/${id}`);
  }

  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.baseUrl, payment);
  }

  updatePayment(id: number, payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${this.baseUrl}/${id}`, payment);
  }

  deletePayment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
