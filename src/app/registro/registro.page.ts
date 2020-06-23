import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import * as $ from "jquery";
import {NavController, AlertController} from '@ionic/angular'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
   logindata= { name: '', pass: '' , username : ''};


  constructor(private storage: Storage,public alertController: AlertController , public navCtrl: NavController) { }

  testClick(){
   console.log("nombre: ", this.logindata.name);
   console.log("usuario: ", this.logindata.username);
   console.log("pass: ", this.logindata.pass);
  }
  
  saveData(){
  this.storage.set('name', $("#Nombre").val() ); 
  this.storage.set('usuario', $("#Usuario").val() ); 
  this.storage.set('pass', $("#pass").val() ); 
  this.storage.set('Marca', $("#Marca").val() ); 
  console.log(' Hola soy ' ,$("#Nombre").val(),'Mi usuario es',$("#Usuario").val() ,'Contraseña',$("#pass").val(),$("#Marca").val());
  }
  getData(){
  console.log($("#Nombre").val());
  this.storage.get('name').then((val) => {
    console.log('Your age is', val);
  });
  }

  async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Confirmacion',
    subHeader: '',
    message: '¿Registrar estos datos en miBici?',
    buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
           }
        }
      ] ,
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}



  ngOnInit() {
  }

}
