import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})

export class MedicoPage implements OnInit {
  medicoId: string;
  character  


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {    
    this.medicoId=this.activatedRoute.snapshot.paramMap.get('id')  
    this.http.get('https://apiceliakos.fly.dev/medico/' + this.medicoId) 
    .subscribe(res=> {this.character = res
      console.log(res)});     
  } 
  
}