import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import { Router, ActivatedRoute} from '@angular/router';
import { ToastController, LoadingController} from '@ionic/angular';

import { GlobalService } from '../global.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router : Router,
  private toastCtrl : ToastController,
  private loadingCtrl : LoadingController, 
  public alertCtrl: AlertController , public navCtrl: NavController, public global: GlobalService) { }
  
   ngOnInit() {
  }

} 