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
 
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  destination = { lat: 4.676802158355713, lng: -74.04825592041016 };
  origin;

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

  } 


}