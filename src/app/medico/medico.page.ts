import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { GoogleMap } from '@angular/google-maps';

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
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})



export class MedicoPage implements OnInit {

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
  navCtrl: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {    
    this.medicoId=this.activatedRoute.snapshot.paramMap.get('id')  
    this.http.get('https://apiceliakos.fly.dev/medico/' + this.medicoId) 
    .subscribe(res=> {this.character = res
      console.log(res)});
    
    

    this.obtenerMedico();  
  }

  obtenerMedico(){ 
    this.medico.position.lat = -33.04950309449776;
    this.medico.position.lng = -71.42883963102214;
    this.medico.nombre ="DR X";
    //console.log(this.character[0]);
    
    

    this.center = {
      lat: this.medico.position.lat,
      lng: this.medico.position.lng,
    };

  }

  mapmedico() {
    this.navCtrl.push("mapmedico");
  }

}