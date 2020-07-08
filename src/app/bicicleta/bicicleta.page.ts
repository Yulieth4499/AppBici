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
  selector: 'app-bicicleta',
  templateUrl: './bicicleta.page.html',
  styleUrls: ['./bicicleta.page.scss'],
})
export class BicicletaPage implements OnInit {
   public intervalos=0;
   setcolor: string="warning";
   setestado:string="Seguro"
   idusu=this.global.iduserActive;
  constructor(private storage: Storage,public alertController: AlertController , public navCtrl: NavController, public http: Http, private router : Router , private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, public global: GlobalService) {
      this.intervalos = setInterval(() => {
      this.http.post("http://aulal.org:1880/seguro",this.global.iduserActive)
  .map(res=>res.json())
  .subscribe(data =>{
    console.log(data.length);
    console.log(data[data.length-1].accion);
    if(this.global.candActive!=data[data.length-1].accion){
    this.global.candActive=data[data.length-1].accion;
    if(this.global.candActive=="Cerrar"){
     this.setcolor="success";
     this.setestado="Seguro";
     this.presentToast('El candado se ha bloqueado');
     this.global.estCanActive="bloqueado"
     this.global.colorEst="success";
     this.global.fechacandActive=data[data.length-1].fecha; 
     this.global.imgCand="assets/candclose.jpg";
    }else{
    this.setcolor="warning";
    this.setestado="Candado Desbloqueado";
    this.presentToast('El candado se ha desbloqueado');
    this.global.estCanActive="desbloqueado";
    this.global.colorEst="warning";
    this.global.fechacandActive=data[data.length-1].fecha; 
    this.global.imgCand="assets/candopen.jpg";
    }}
    else{
    console.log("Mismo Estado");
    }
      })
      }, 5000);

     
      }
  ngOnInit() {
  }

 
 /*estadoBici(){
  let url1: string ="http://aulal.org:1880/seguro" ; 
  let dataPost1= this.global.iduserActive;
  this.http.post(url1,dataPost1)
  .map(res=>res.json())
  .subscribe(data =>{
    console.log(data);
    console.log(data[0]);
    console.log(data.length);
    this.global.candActive=data[data.length-1].accion;
    this.global.fechacandActive=data[data.length-1].fecha; 
    })
    }*/
  estadogps(){
  let url1: string ="http://aulal.org:1880/posicion" ; 
  let dataPost1= this.global.iduserActive;
  this.http.post(url1,dataPost1)
  .map(res=>res.json())
  .subscribe(data =>{
    console.log(data);
    console.log(data.length);
    console.log(data[data.length-1]);
    /*console.log(data.length);
    this.global.candActive=data[0].accion;
    this.global.fechacandActive=data[0].fecha*/
      })
    }

    async presentToast(a){
    const toast = await this.toastCtrl.create({
    message: a, 
    duration: 3000,
    position: 'top'
    }); 
    toast.present();
    }
   }

