import { Component, OnInit } from '@angular/core';
declare var particlesJS:any;
@Component({
  selector: 'app-interact-with-me',
  templateUrl: './interact-with-me.component.html',
  styleUrls: ['./interact-with-me.component.css']
})
export class InteractWithMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      particlesJS.load('particles-js', '../assets/particlesjs-config.json',null);
  }


}
