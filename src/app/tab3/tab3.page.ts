import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  localId: string;  
  characters=[]

  
  
  private url= environment.urlprod;

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>(this.url+'restaurantes')
    .subscribe(res=>{
      console.log(res);
      this.characters=res.locales;  //nombre del arreglo mostrado por consola     
    });
    
     
  }  

}