import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {  

  medicoId: string;  
  characters=[]

 
  private url= environment.urlprod;

  constructor(      
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>(this.url+'medicos')
    .subscribe(res=>{
      console.log(res);
      this.characters=res.medicos;   //nombre del arreglo mostrado por consola     
    });
     
  }  

}

