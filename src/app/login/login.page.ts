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
 logindat= { email: '', passw: '' };

  constructor(private storage: Storage,public alertController: AlertController , public navCtrl: NavController, public http: Http, private router : Router , private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, public global: GlobalService) { }

 
  
  loginin(){
  if(this.logindat.email !="" && this.logindat.passw !=""){
  let url1: string ="http://127.0.0.1:1880/consulta" ; 
  let dataPost1= {
                        user: this.logindat.email,
                        pass: this.logindat.passw
                        };
  this.http.post(url1,dataPost1)
  .map(res=>res.json())
  .subscribe(data =>{
    console.log(data);
    console.log(data.id); 

        if (data==null){
           this.presentToast('Datos Incompletos');
           
          }
          else{
          this.presentToast('Bienvenido')
          this.router.navigate(['/inicio']);
          this.global.nameActive=data.nombre; 
          this.global.lockActive=data.candado; 
          }
      })
      }
  else{this.presentToast('Datos Incompletos');}
  }
  


  ngOnInit() {
  }
  async presentToast(a){
    const toast = await this.toastCtrl.create({
    message: a, 
    duration: 1500,
    position: 'top'
    }); 
    toast.present();
    }

}
