import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../_models/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = 'http://localhost:5147/api/vendors'; // Adjust as needed

  constructor(private http: HttpClient) { }

  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.baseUrl);
  }

  getVendor(id: number): Observable<Vendor> {
    return this.http.get<Vendor>(`${this.baseUrl}/${id}`);
  }

  createVendor(vendor: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(this.baseUrl, vendor);
  }

  updateVendor(id: number, vendor: Vendor): Observable<Vendor> {
    return this.http.put<Vendor>(`${this.baseUrl}/${id}`, vendor);
  }

  deleteVendor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
