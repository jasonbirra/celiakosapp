import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router'
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  characters=[]

  private url= environment.urlprod;

  constructor(
    private http:HttpClient
  ) { }

  

  ngOnInit() {
    this.http.get<any>(this.url+'infos')
    .subscribe(res=>{
      console.log(res);
      this.characters=res.infos; //nombre del arreglo mostrado por consola       
    });
  }

}