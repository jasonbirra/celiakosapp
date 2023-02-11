import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

interface Local {
  position: {
    lat: number;
    lng: number;
  };
  nombre: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-maplocal',
  templateUrl: './maplocal.page.html',
  styleUrls: ['./maplocal.page.scss'],
})
export class MaplocalPage implements OnInit {
  
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  center: google.maps.LatLngLiteral;
  
  local: Local = 
    {
      position: {
        lat: 0,
        lng: 0,
      },
      nombre: '',
      image:
        'https://img.freepik.com/vector-gratis/fondo-personaje-doctor_1270-84.jpg',
      text: 'Foto del doctor',     
    }
   
  ;

  localId: string;
  character

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {  
    
    this.obtenerLocal();  
  }

  obtenerLocal(){     
     
    this.local.position.lat = Number.parseFloat(this.activatedRoute.snapshot.paramMap.get('lat'));
    this.local.position.lng = Number.parseFloat(this.activatedRoute.snapshot.paramMap.get('lng'));
    this.local.nombre =(this.activatedRoute.snapshot.paramMap.get('nombre'));   
    
    

    this.center = {
      lat: this.local.position.lat,
      lng: this.local.position.lng,     
      
    };
  }

  
}