import { Component, OnInit } from '@angular/core';
import { AppComponent } from "app/app.component";

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

    constructor(
        private rootComp: AppComponent
    ) { }

    modal_container_class: string = "out";
    modal_theme = "one";

    button_click() {
        this.modal_container_class = this.modal_theme;
    }

    modal_click() {
        this.modal_container_class = this.modal_theme + " out";
    }
    
  ngOnInit() {
  }

}
