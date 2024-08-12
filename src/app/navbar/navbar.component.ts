import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault,RouterLink,RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
header:string ='Start Framework'.toUpperCase();
about:string='About'.toUpperCase();
portfolio:string='portfolio'.toUpperCase();
contact:string='contact'.toUpperCase();
getNavBigger(event:Event):void{
  console.log(event.target);
  
}
data:string='';
friends:string[]=['mohaed ','aemend','arstrats']
role:string='user'



}









