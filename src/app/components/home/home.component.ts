import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private social_imgs = "assets/social/";
    private default_color = "";

  constructor() { }

  get_url(social_img) {
      return this.social_imgs + this.default_color + social_img;
  }

  ngOnInit() {
  }

}
