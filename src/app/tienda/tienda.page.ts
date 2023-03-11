import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  tiendaId: string;
  character

  private url= environment.urlprod;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

    
  ngOnInit() {    
    this.tiendaId=this.activatedRoute.snapshot.paramMap.get('id')  
    this.http.get(this.url+'tienda/'+ this.tiendaId) 
    .subscribe(res=> {this.character = res});     
  } 
    
  
}
  