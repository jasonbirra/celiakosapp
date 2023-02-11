import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

interface Medico {
  position: {
    lat: number;
    lng: number;
  };
  nombre: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-mapmedico',
  templateUrl: './mapmedico.page.html',
  styleUrls: ['./mapmedico.page.scss'],
})
export class MapmedicoPage implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  center: google.maps.LatLngLiteral;
  
  medico: Medico = 
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

  medicoId: string;
  character


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {  
    
    this.obtenerMedico();  
  }

  obtenerMedico(){     
     
    this.medico.position.lat = Number.parseFloat(this.activatedRoute.snapshot.paramMap.get('lat'));
    this.medico.position.lng = Number.parseFloat(this.activatedRoute.snapshot.paramMap.get('lng'));
    this.medico.nombre =(this.activatedRoute.snapshot.paramMap.get('nombre'));   
    
    

    this.center = {
      lat: this.medico.position.lat,
      lng: this.medico.position.lng,     
      
    };
  }

  
}
