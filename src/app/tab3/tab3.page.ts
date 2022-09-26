import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  characters=[]

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://apiceliakos.fly.dev/restaurantes')
    .subscribe(res=>{
      console.log(res);
      //this.characters=res.results;
      this.characters=res.resto.restos;
      //this.characters=res;
    });
  }

}