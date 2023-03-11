import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})

export class MedicoPage implements OnInit {
  medicoId: string;
  character  

  private url= environment.urlprod;


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {    
    this.medicoId=this.activatedRoute.snapshot.paramMap.get('id')  
    this.http.get(this.url+'medico/'+ this.medicoId) 
    .subscribe(res=> {this.character = res
      console.log(res)});     
  } 

 

 
  
}