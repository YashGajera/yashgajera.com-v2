import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
declare var particlesJS: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    constructor(
        public media: ObservableMedia
    ) { }

    ngOnInit() {
        particlesJS.load('particles-js', '../assets/particlesjs-config-skills.json', null);
  }

}
