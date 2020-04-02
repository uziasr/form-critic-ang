import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BodyComponent } from './components/body/body.component';
import { CasesComponent } from './components/cases/cases.component';
import { CaseComponent } from './components/case/case.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CasePostComponent } from './components/case-post/case-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BodyComponent,
    CasesComponent,
    CaseComponent,
    SignupComponent,
    LoginComponent,
    CasePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
