import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from '../../services/get-data.service';
import Cost from '../../types/cost';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<Cost[]>;
  constructor(private shippingService: GetDataService) {}

  ngOnInit(): void {
    this.shippingCosts = this.shippingService.getShippingPrice();
    console.log('Shipping Costs', this.shippingCosts);
  }
}
