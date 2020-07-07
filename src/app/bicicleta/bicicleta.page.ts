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
   idusu=this.global.iduserActive;
   
  constructor(private storage: Storage,public alertController: AlertController , public navCtrl: NavController, public http: Http, private router : Router , private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, public global: GlobalService) { }

  ngOnInit() {
  }

 estadoBici(){
  let url1: string ="http://aulal.org:1880/seguro" ; 
  let dataPost1= this.global.iduserActive;
  this.http.post(url1,dataPost1)
  .map(res=>res.json())
  .subscribe(data =>{
    console.log(data);
    console.log(data[0]);
    console.log(data.length);
    this.global.candActive=data[0].accion;
    this.global.fechacandActive=data[0].fecha; 
      })
    }
  }

