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
import { DataService } from '../service/data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = ""; 
  apellido: string ="";
  email: string = ""; 
  pass: string = ""; 
  edad: string = ""; 
  usobici: string = ""; 
  prueba:string ="Correcto";

  disableButton; 

  constructor(private storage: Storage,
  private router : Router,
  private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, 
  public alertCtrl: AlertController , public navCtrl: NavController,
  private accsPrvds: AccessProviders,public http: Http, private dataService: DataService) { }

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
     else if(this.apellido==""){
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
   console.log('Estamos Registrando');
  let url1: string ="http://aulal.org:1880/login" ; 
  let dataPost1= {
                        user: this.nombre,
                        email:this.email,
                        pass: this.pass, 
                        apellido: this.apellido,
                        edad: this.edad,
                        uso: this.usobici
                        };
  this.http.post(url1,dataPost1)
  .subscribe((res: any)=>{
     loader.dismiss(); 
     console.log(res.status);
     if (res.status==200){
         this.presentToast('Registro Exitoso');
          this.router.navigate(['/login']); 
          this.disableButton=false;
          loader.dismiss(); 
           
          }
          else{
          this.presentToast('Vuelve a intentarlo');
          }
     
  })
   }
   }
  

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
