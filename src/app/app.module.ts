import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BodyComponent } from './components/body/body.component';
import { CasesComponent } from './components/cases/cases.component';
import { CaseComponent } from './components/case/case.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BodyComponent,
    CasesComponent,
    CaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
