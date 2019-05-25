import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../shared/purchase.service';
import { Purchase } from '../../shared/purchase.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  list: Purchase[];
  constructor(private service: PurchaseService,
    private firestore: AngularFirestore,
    private toatsr: ToastrService) { }

  ngOnInit() {
    this.service.getPurchase().subscribe(actionArray => {
          this.list = actionArray.map( items => {
              return {
                id: items.payload.doc.id,
                ...items.payload.doc.data(),
              } as Purchase;
          });
    });
  }

  onEdit(purchase: Purchase) {
    this.service.formData = Object.assign({}, purchase);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('purchase/' + id).delete();
      this.toatsr.warning('Deleted successfully', 'Purchase. Register');
    }
  }
}
