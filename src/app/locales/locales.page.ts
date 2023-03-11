import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {  

  localId: string;
  character

  private url= environment.urlprod;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {    
    this.localId=this.activatedRoute.snapshot.paramMap.get('id')  
    this.http.get(this.url+'restaurant/'+ this.localId) 
    .subscribe(res=> {this.character = res
      console.log(res)});       
  }  
    
  
}
  