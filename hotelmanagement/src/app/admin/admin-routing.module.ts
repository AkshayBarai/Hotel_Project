import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';

const routes: Routes = [
  {path:'adminland',component:AdminlandingComponent},
{path:'adminsignin',component:AdminsigninComponent},
{path:'adminsignup',component:AdminsignupComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
