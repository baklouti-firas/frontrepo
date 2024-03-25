import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupeComponent } from './groupe/groupe.component';
import { PrimeComponent } from './prime/prime.component';
import { PrixComponent } from './prix/prix.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'groupe', component: GroupeComponent },
  { path: 'prime', component: PrimeComponent },
  { path: 'prix', component: PrixComponent },
  { path: 'mock/locations', component: LocationsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
