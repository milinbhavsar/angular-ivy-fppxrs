import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cost from '../types/cost';

@Injectable({ providedIn: 'root' })
export class GetDataService {
  constructor(private _httpClient: HttpClient) {}
  getShippingPrice() {
    return this._httpClient.get<Cost[]>('/assets/shipping.json');
  }
}
