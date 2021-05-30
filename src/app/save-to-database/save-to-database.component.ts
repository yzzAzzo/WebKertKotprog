import { Component, OnInit } from '@angular/core';
import { MediumCharacteristic } from './../models/shopping-cart';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-save-to-database',
  templateUrl: './save-to-database.component.html',
  styleUrls: ['./save-to-database.component.scss']
})
export class SaveToDatabaseComponent implements OnInit {


  mediumCharacteristic : MediumCharacteristic

  city = ""
  country = ""
  postCode = ""
  givenName = ""
  phoneNumber = ""

  saveData(){

    this.loadData();
    this.afs.collection('Individuals').add(this.mediumCharacteristic).then(res => {
      console.log('mentve', res);
    }).catch(error =>{
      console.log('error', error);
    })

    this.city = ""
    this.country = ""
    this.postCode = ""
    this.phoneNumber = ""
  }

  constructor(private afs: AngularFirestore) {
    this.mediumCharacteristic ={
      "city": "",
      "contactType": "",
      "country": "",
      "emailAddress" : "",
      "faxNumber": "",
      "phoneNumber": "",
      "postCode": "",
      "socialNetworkId": "",
      "stateOrProvince": "",
      "street1": "",
      "street2": "",
    }
  }

  loadData(){

    this.mediumCharacteristic = {

      "city": this.city,
      "contactType": "",
      "country": this.country,
      "emailAddress" : "",
      "faxNumber": "",
      "phoneNumber": this.phoneNumber,
      "postCode": this.postCode,
      "socialNetworkId": "",
      "stateOrProvince": "",
      "street1": "",
      "street2": "",
    }
  }

  ngOnInit(): void {
  }
}
