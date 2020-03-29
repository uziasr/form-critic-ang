import { NgModule } from '@angular/core';
import { BodyComponent } from './components/body/body.component';
import {CasesComponent} from './components/cases/cases.component';
import { SignupComponent } from './components/signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'posts',
    component: CasesComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
