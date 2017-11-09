import { Component, HostBinding, Renderer } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding('class') public cssClass = 'modal-inactive';
  title = 'app';

  constructor(
    private renderer: Renderer
  ) { }
  
  mobile_menu_active = false;

}
