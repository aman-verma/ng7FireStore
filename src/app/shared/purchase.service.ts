import { Injectable } from '@angular/core';
import { Purchase } from './purchase.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  formData: Purchase;
  constructor(private firesore: AngularFirestore) { }

  getPurchase() {
    return this.firesore.collection('purchase').snapshotChanges();
  }
}
