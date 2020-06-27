import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { AccessProviders } from './providers/access-providers';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ AccessProviders ]
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
     {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Mi Bici',
      url: '/bicicleta',
      icon: 'bicycle'
    },
    {
      title: 'Salud',
      url: '/salud',
      icon: 'heart'
    },
    {
      title: 'Mis Rutas',
      url: '/rutas',
      icon: 'map'
    },
   
    {
      title: 'Info',
      url: '/info',
      icon: 'information-circle'
    }
  ];
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage : Storage, 
    public navCtrl : NavController,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  
   this.storage.get('storage_xxx').then((res)=>{
      if(res == null){
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/inicio']);
      }
    });
   }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
