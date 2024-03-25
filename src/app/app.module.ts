import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TestComponent } from './test/test.component';
import { FormsComponent } from './forms/forms.component';
import { Page1Component } from './page1/page1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GroupeComponent } from './groupe/groupe.component';
import { PrimeComponent } from './prime/prime.component';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { PrixComponent } from './prix/prix.component';
import { LocationsComponent } from './locations/locations.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TestComponent,
    FormsComponent,
    Page1Component,
    LoginComponent,
    GroupeComponent,
    PrimeComponent,
    PrixComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TabMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
