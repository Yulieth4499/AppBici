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
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

   

  constructor(private storage: Storage,public alertController: AlertController , public navCtrl: NavController, public http: Http, private router : Router , private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, public global: GlobalService) {

     
      }

  ngOnInit() {
  }

}
