import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseComponent } from './purchases/purchase/purchase.component';
import { PurchaseListComponent } from './purchases/purchase-list/purchase-list.component';
import { PurchaseService } from './shared/purchase.service';


@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    PurchaseComponent,
    PurchaseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot(), ToastContainerModule,
  ],
  providers: [PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
