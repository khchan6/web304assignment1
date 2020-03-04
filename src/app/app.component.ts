import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'web304assignment1';
  @Input() inputerror: boolean;
  // console.log(inputerror);
}
