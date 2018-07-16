import { Component,Input } from '@angular/core'

@Component({
	selector: 'top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent{
	@Input() leftIcon:String;
	@Input() rightMenu:String;
	@Input() title:String;
}
