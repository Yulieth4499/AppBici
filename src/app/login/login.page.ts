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

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 logindat= { email: '', passw: '' };

  constructor(private storage: Storage,public alertController: AlertController , public navCtrl: NavController, public http: Http, private router : Router , private toastCtrl : ToastController,
  private loadingCtrl : LoadingController,private dataService: DataService) { }

  loginin(){
  if(this.logindat.email !="" && this.logindat.passw !=""){
  console.log("email: ", this.logindat.email);
  console.log("contraseña: ", this.logindat.passw);

  let url: string ="http://localhost/bici/login.php" ; 
  let dataPost = JSON.stringify({
                        user: this.logindat.email,
                        pass: this.logindat.passw
                        });
  this.http.post(url,dataPost)
  .map(res=>res.json())
  .subscribe(data =>{

     console.log(data);
     if (data==null){
           this.presentToast('Usuario / Contraseña Incorrectos');
          }
          else{
          
          this.router.navigate(['/inicio']); 
          }
  })


  }
  else{console.log("Ingrese Nuevamente");}
  }
  
  Conexionhttp(){
  let url1: string ="http://aulal.org:1880/sesion" ; 
  let dataPost1= {
                        user: this.logindat.email,
                        pass: this.logindat.passw
                        };
  this.http.post(url1,dataPost1)
  .subscribe((res: any)=>{

     console.log(res);
     /*if (data==null){
           this.presentToast('Usuario / Contraseña Incorrectos');
          }
          else{
          
          this.router.navigate(['/inicio']); 
          }*/
     
  })
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
