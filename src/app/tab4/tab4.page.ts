import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {  

  medicoId: string;  
  characters=[]

  constructor(    
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://apiceliakos.fly.dev/medicos')
    .subscribe(res=>{
      console.log(res);
      this.characters=res.medicos.medicos;
      //this.characters= Object.entries(res.medicos.medicos);
      
    });
     
  }

}