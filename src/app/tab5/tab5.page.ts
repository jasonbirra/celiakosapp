import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  tiendaId: string;  
  characters=[]

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://apiceliakos.fly.dev/tiendas')
    .subscribe(res=>{
      console.log(res);
      //this.characters=res.results;
      this.characters=res.tienda.tiendas;
      //this.characters=res;
    });
     
  }  

}