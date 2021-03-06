import { NgModule } from '@angular/core'
import { RouterModule,Routes } from '@angular/router'
import { HomeComponent } from './home.component'
const routes:Routes = [{
	path:'home',
	component:HomeComponent
},{
	path:'',
	redirectTo: '/home', pathMatch: 'full'
}]

@NgModule({
	imports:[
	    RouterModule.forRoot(
	    	routes,
	    	{
	    		enableTracing:true,
	    		useHash:true
	    	}
	    )
	],
	exports:[RouterModule]
})

export class AppRoutingModule{}
