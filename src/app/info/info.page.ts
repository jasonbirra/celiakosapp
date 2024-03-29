import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit { 

  infoId: string;
  character

  private url= environment.urlprod;

  constructor(

    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {    
    this.infoId=this.activatedRoute.snapshot.paramMap.get('id')  
    this.http.get(this.url+'info/' + this.infoId)    
    .subscribe(res=> {this.character = res
      console.log(res)});
  }
}