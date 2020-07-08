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
  selector: 'app-candado',
  templateUrl: './candado.page.html',
  styleUrls: ['./candado.page.scss'],
})
export class CandadoPage implements OnInit {

  constructor(public global: GlobalService) { }
   imagen: string="assets/candclose.jpg" ;

  ngOnInit() {

  }

}
