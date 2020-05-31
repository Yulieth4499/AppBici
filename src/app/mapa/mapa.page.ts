import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'; 
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

 constructor(
  	private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  	) {}

  ngOnInit(){
  	this.loadMap();
  }

  async loadMap(){

    const loading = await this.loadingCtrl.create();
    loading.present();
    

    const rta= await this.geolocation.getCurrentPosition();
    const myLatLng = {
       lat: rta.coords.latitude,
       lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    const map= new google.maps.Map(mapEle, {
    	center: myLatLng,
    	zoom: 12
    });

    google.maps.event
    .addListenerOnce(map, 'idle', () => {
    loading.dismiss();
    const marker = new google.maps.Marker({
       position: {
         lat: myLatLng.lat,
         lng: myLatLng.lng
         },
      zoom: 8,
      map: map,
      title: 'Hello World!'
    });
    
  });

  }

}