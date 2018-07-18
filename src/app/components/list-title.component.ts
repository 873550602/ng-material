import { Component,Input } from '@angular/core'

@Component({
	selector: 'list-title',
	templateUrl: './list-title.component.html',
	styleUrls: ['./list-title.component.css']
})

export class TopBarComponent{
	@Input() leftIcon:String;
	@Input() rightMenu:String;
	@Input() title:String;
}
