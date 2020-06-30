import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import * as $ from "jquery";
import {NavController, AlertController} from '@ionic/angular'

import { Router, ActivatedRoute} from '@angular/router'
import { ToastController, LoadingController} from '@ionic/angular'
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AccessProviders } from '../providers/access-providers';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = ""; 
  email: string = ""; 
  pass: string = ""; 
  edad: string = ""; 
  genero: string = ""; 
  usobici: string = ""; 

  disableButton; 

  constructor(private storage: Storage,
  private router : Router,
  private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, 
  public alertCtrl: AlertController , public navCtrl: NavController,
  private accsPrvds: AccessProviders,public http: Http) { }

  

  ngOnInit() {
  }

  ionViewDidEnter(){
  this.disableButton =false;
  }

   async register(){
   if(this.nombre==""){
       this.presentToast('Los Datos estan incompletos'); 
     } else if(this.email==""){
       this.presentToast('Los Datos estan incompletos'); 
     } else if(this.pass==""){
       this.presentToast('Los Datos estan incompletos'); 
     }
   console.log('Estamos Registrando');
  let url1: string ="http://aulal.org:1880/login" ; 
  let dataPost1= {
                        user: this.nombre,
                        email:this.email,
                        pass: this.pass
                        };
  this.http.post(url1,dataPost1)
  .map(res=>res.text())
  .subscribe(data =>{

     console.log(data);
     
  })
   }
  /*async register(){
     if(this.nombre==""){
       this.presentToast('Los Datos estan incompletos'); 
     } else if(this.email==""){
       this.presentToast('Los Datos estan incompletos'); 
     } else if(this.pass==""){
       this.presentToast('Los Datos estan incompletos'); 
     }
     else if(this.genero==""){
       this.presentToast('Los Datos estan incompletos'); 
     }
     else if(this.edad==""){
       this.presentToast('Los Datos estan incompletos'); 
     }
      else if(this.usobici==""){
       this.presentToast('Los Datos estan incompletos'); 
     }else{
     this.disableButton = true; 
     const loader = await this.loadingCtrl.create({
     message: 'Espere...',     });
     loader.present();

     return new Promise(resolve=>{
        let body={
             aksi: 'proses_register',
             nombre: this.nombre,
             email: this.email,
             pass: this.pass,
             edad: this.edad,
             genero: this.genero,
             usobici: this.usobici
            }
          this.accsPrvds.postData(body,'proses-api.php').subscribe((res: any)=>{
          console.log(body);
          if (res.success==true){
          loader.dismiss(); 
          this.disableButton=false; 
          this.presentToast(res.msg); 
          this.router.navigate(['/login']);
          }
          else{
          loader.dismiss(); 
          this.disableButton = false; 
          this.presentToast(res.msg); 
          }
          });
     });
     }

    }*/

    async presentToast(a){
    const toast = await this.toastCtrl.create({
    message: a, 
    duration: 1500,
    position: 'top'
    }); 
    toast.present();
    }


    async presentAlert(a) {
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cerrar',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Registrar',
          handler: () => {
          console.log('Confirm Cancel: no funciona');
          }
        }
      ]
    });

    await alert.present();
  }
}
