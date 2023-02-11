import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  tiendaId: string;
  character
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {    
    this.tiendaId=this.activatedRoute.snapshot.paramMap.get('id')  
    this.http.get('https://apiceliakos.fly.dev/tienda/' + this.tiendaId) 
    .subscribe(res=> {this.character = res
      console.log(res)});       
  }  
    
  
}
  