import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  API = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  // Register a new order
  public registerOrder(orderData: any) {
    return this.http.post(`${this.API}/orders`, orderData); // Adjusted to match backend endpoint
  }

  // Get all orders
  public getOrders() {
    return this.http.get(`${this.API}/orders`); // Adjusted to match backend endpoint
  }

  // Delete an order by ID
  public deleteOrder(orderId: number) {
    
    return this.http.delete(`${this.API}/orders/${orderId}`); // Adjusted to match backend endpoint
  }

  // Update an order
 // ...existing code...
  // Update an order
  public updateOrder(orders: any) {
    const orderId = orders.id || orders.orderId; // Ensure compatibility
    return this.http.put(`${this.API}/orders/${orderId}`, orders); // Corrected endpoint
  }
// ...existing code...
}
