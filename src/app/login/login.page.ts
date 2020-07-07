import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import * as $ from "jquery";
import {NavController, AlertController} from '@ionic/angular';
import { Router, ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ToastController, LoadingController} from '@ionic/angular';
import { DataService } from '../service/data.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 logindat= { email: '', passw: ''};
 anterior: string; 

  constructor(private storage: Storage,public alertController: AlertController , public navCtrl: NavController, public http: Http, private router : Router , private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, public global: GlobalService) { }

  
  
  loginin(){
  if(this.logindat.email !="" && this.logindat.passw !=""){
  let url1: string ="http://aulal.org:1880/consulta" ; 
  let dataPost1= {
                        email: this.logindat.email,
                        pass: this.logindat.passw
                        };
  this.http.post(url1,dataPost1)
  .map(res=>res.json())
  .subscribe(data =>{
    console.log(data);
     console.log(data.id_usuarios);
        if (data.id_usuarios==""){
           this.presentToast('Datos Incompletos');
           
          }
          else{
          this.presentToast('Bienvenido')
          this.router.navigate(['/inicio']);
         this.global.nameActive=data.nombre; 
         this.global.iduserActive=data.id_usuarios; 
         this.storage.set('session',data.nombre );
         this.storage.set('iduser',data.id_usuarios );
          }
      })
      }
  else{this.presentToast('Datos Incompletos');}
  }
  


  ngOnInit() {
   this.storage.get('iduser').then((val) => {
    this.global.iduserActive=val;
    });
  this.storage.get('session').then((val) => {
    console.log(val);
    if(val==null){
    console.log("Continua");
    }
    else{
    this.router.navigate(['/inicio']);
    this.global.nameActive=val;
    }});
   
  }
  async presentToast(a){
    const toast = await this.toastCtrl.create({
    message: a, 
    duration: 1200,
    position: 'top'
    }); 
    toast.present();
    }

}
