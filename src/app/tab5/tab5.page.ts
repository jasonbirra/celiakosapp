import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  tiendaId: string;  
  characters=[]

  private url= environment.urlprod;
  
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>(this.url+'tiendas')
    .subscribe(res=>{
      console.log(res);
      this.characters=res.locales;  //nombre del arreglo mostrado por consola  
    });
     
  }  

}