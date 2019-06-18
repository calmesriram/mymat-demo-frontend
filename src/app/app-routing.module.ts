import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CandidateEntryComponent } from './candidate-entry/candidate-entry.component';

const routes: Routes = [
{
	path:"login",
	component:LoginComponent
},
{
	path:"candidateEntry",
	component:CandidateEntryComponent
},
{
	path:"",
	pathMatch:"full",
	redirectTo:"login"
},
{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
