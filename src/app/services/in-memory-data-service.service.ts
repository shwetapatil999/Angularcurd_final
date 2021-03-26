import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ContactDetails } from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let contact = [
      new ContactDetails(1, "Dipak", "+917848521450", "dip@gmail.com"),
      new ContactDetails(2, "Pranjal", "+919999905556", "pran@gmail.com"),
      new ContactDetails(3, "Nikhil", "+911234335458", "Nik@gmail.com"),
      new ContactDetails(4, "Nikita", "+919860385214", "niki@gmail.com")
    ];
    return {contact};
  }


  genId(contact: ContactDetails[]): number {
    return contact.length > 0 ? Math.max(...contact.map(hero => hero.id)) + 1 : 4;
  }
}
