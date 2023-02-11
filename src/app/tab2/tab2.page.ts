import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  characters=[]

  constructor(
    private http:HttpClient
  ) { }

  

  ngOnInit() {
    this.http.get<any>('https://apiceliakos.fly.dev/infos')
    .subscribe(res=>{
      console.log(res);
      this.characters=res.info.informaciones;
      //this.characters=res.results;
      //this.characters=res;
    });
  }

}