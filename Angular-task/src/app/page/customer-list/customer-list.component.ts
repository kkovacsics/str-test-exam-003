import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  $customerList: BehaviorSubject<Customer[]> = this.customerService.$customerList;

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.customerService.getAll();
  }

  customer = new Customer();
  onSelect(customer: Customer): void {
    this.customer = customer;
  }
  onDelete(customer: Customer): void {
    this.customerService.remove(customer);
  }
}
