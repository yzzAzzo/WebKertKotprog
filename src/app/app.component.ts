import { Component } from '@angular/core';

import{ ShoppingCart } from './models/shopping-cart'
import { AngularFirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kotprog';
}
