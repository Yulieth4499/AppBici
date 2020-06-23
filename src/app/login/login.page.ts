import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import * as $ from "jquery";
import {NavController, AlertController} from '@ionic/angular'
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 logindat= { email: '', passw: '' };

  constructor(private storage: Storage,public alertController: AlertController , public navCtrl: NavController, public http: Http) { }

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
  })

  }
  else{console.log("Ingrese Nuevamente");}
  }

  ngOnInit() {
  }

}
