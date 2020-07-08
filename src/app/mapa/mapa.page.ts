import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'; 
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

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
 
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  destination = { lat: 4.676802158355713, lng: -74.04825592041016 };

  origin;
  public intervalos=0;
  public latitud=0; 
  public longitud=0; 
 constructor(
    private geolocation: Geolocation,   private loadingCtrl: LoadingController, private storage: Storage,public alertController: AlertController , public navCtrl: NavController, public http: Http, private router : Router , private toastCtrl : ToastController, public global: GlobalService
    ) {
    
      }
    
  ngOnInit(){
    this.loadMap();
  }

  async loadMap(){

    const loading = await this.loadingCtrl.create();
    loading.present();
    

    const rta= await this.geolocation.getCurrentPosition();
    this.origin = { 
        lat: rta.coords.latitude, 
        lng: rta.coords.longitude 
      };
    console.log(origin);
    const mapEle: HTMLElement = document.getElementById('map');
    const map= new google.maps.Map(mapEle, {
      center: this.destination,
      zoom: 12
    });

    this.directionsDisplay.setMap(map);

    google.maps.event
    .addListenerOnce(map, 'idle', () => {
    mapEle.classList.add('show-map');  
    loading.dismiss();
    
   this.calculateRoute();
    
  });

  }

     calculateRoute(){
      this.intervalos = setInterval(() => {
      this.http.post("http://aulal.org:1880/posicion",this.global.iduserActive)
      .map(res=>res.json())
      .subscribe(data =>{
      console.log(data.length);
      this.destination.lat=parseFloat(data[data.length-1].latitud);
      this.destination.lng=parseFloat(data[data.length-1].longitud);
      console.log(this.destination.lat);
      console.log(this.destination.lng);
      console.log(this.destination);
      });
        this.directionsService.route({
    origin: this.origin,
    destination: this.destination,
    travelMode: google.maps.TravelMode.DRIVING,
  }, (response, status)  => {
    if (status === google.maps.DirectionsStatus.OK) {
      this.directionsDisplay.setDirections(response);
    } else {
      alert('Could not display directions due to: ' + status);
    }
  });
      }, 10000);
   
   


  } 


}