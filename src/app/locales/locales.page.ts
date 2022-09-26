import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {
  infoId: string;
  character


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {    
    this.infoId=this.activatedRoute.snapshot.paramMap.get('id')  
    this.http.get('https://apiceliakos.fly.dev/restaurant/' + this.infoId) 
    .subscribe(res=> {this.character = res
      console.log(res)});
    
  }

}