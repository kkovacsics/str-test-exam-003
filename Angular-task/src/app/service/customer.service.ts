import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerURL = 'https://nettuts.hu/jms/kkovacsics/customers';
  $customerList: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  $customer: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(new Customer());

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll(): void {
    this.httpClient.get<Customer[]>(this.customerURL).subscribe(
      list => this.$customerList.next(list)
    )
  }

  get(id: number): void {
    this.httpClient.get<Customer>(`${this.customerURL}/${id}`).subscribe(
      customer => this.$customer.next(customer)
    )
  }

  remove(customer: Customer): void {
    this.httpClient.delete<Customer>(`${this.customerURL}/${customer.id}`).subscribe(
      customer => this.$customer.next(customer)
    )
  }

}
