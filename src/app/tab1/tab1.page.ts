import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap } from '@angular/google-maps';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  option={
    slidesPerview: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoPlay: {
      delay:4000}
  }

}
