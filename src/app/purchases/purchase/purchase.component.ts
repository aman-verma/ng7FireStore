import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PurchaseService } from '../../shared/purchase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {

  constructor(private service: PurchaseService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
   this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id : null,
      model :  '',
      barCode :  '',
      quantity: 1,
      date : new Date(Date.now())
    };
  }

  onSubmit(form?: NgForm) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('purchase').add(data);
    } else {
      this.firestore.doc('purchase/' + form.value.id).update(data);
    }
    this.resetForm(form);
    this.toastr.success('Submitted Succcessfully', 'Purchase Registered');
  }

}
