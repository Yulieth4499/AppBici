import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import { Router, ActivatedRoute} from '@angular/router';
import { ToastController, LoadingController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { GlobalService } from '../global.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private storage: Storage, private router : Router,
  private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, 
  public alertCtrl: AlertController , public navCtrl: NavController, public global: GlobalService) { }
  
   ngOnInit() {
  }
  cerrarsesion(){
  this.storage.set('session',null);
  this.storage.set('iduser',null);
  this.router.navigate(['/login']);
  }

} 