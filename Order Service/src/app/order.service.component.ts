import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetailsService } from './order.service-details.service';

@Component({
  selector: 'app-order-details-root',
  templateUrl: './order.service.component.html',
  styleUrls: ['./order.service.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  title = 'orderdetails';

  constructor(private orderService: OrderDetailsService) {}

  orderDetails: any[] = [];
  orderToUpdate = {
    id: null,
    customerName: '',
    product: '',
    quantity: 0,
    description: ''
  };

  ngOnInit(): void {
    this.getOrderDetails();
  }

  // Register a new order
  register(registerForm: NgForm): void {
    this.orderService.registerOrder(registerForm.value).subscribe(
      (response: any) => {
        console.log('Order registered:', response);
        registerForm.reset();
        this.getOrderDetails();
      },
      (error: any) => {
        console.error('Error registering order:', error);
      }
    );
  }

  // Get all orders
  getOrderDetails(): void {
    this.orderService.getOrders().subscribe(
      (response: any) => {
        console.log('Fetched orders:', response);
        if (Array.isArray(response)) {
          this.orderDetails = response.map(order => ({
            ...order,
            id: order.id || order.orderId
          }));
        } else {
          console.error('Unexpected response structure:', response);
        }
      },
      (error: any) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  // Delete an order
  deleteOrder(order: any): void {
    if (!order.id) {
      console.error('Order ID is undefined. Cannot delete order.');
      return;
    }
    console.log('Deleting order with ID:', order.id);
    this.orderService.deleteOrder(order.id).subscribe(
      (response: any) => {
        console.log('Order deleted:', response);
        this.getOrderDetails();
      },
      (error: any) => {
        console.error('Error deleting order:', error);
      }
    );
  }

  // Edit an order
  edit(order: any): void {
    this.orderToUpdate = { ...order };
  }

  // Update an order
  updateOrder(): void {
    this.orderService.updateOrder(this.orderToUpdate).subscribe(
      (response: any) => {
        console.log('Order updated:', response);
        this.getOrderDetails();
      },
      (error: any) => {
        console.error('Error updating order:', error);
      }
    );
  }
}

