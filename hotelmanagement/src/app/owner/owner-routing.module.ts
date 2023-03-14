import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { OwnerregistrationComponent } from './ownerregistration/ownerregistration.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';

const routes: Routes = [
  {path:'ownerland',component:OwnerlandingComponent},
   {path:'ownersignin',component:OwnersigninComponent},
   {path:'ownersignup',component:OwnersignupComponent},
   {path:'ownersuccess',component:OwnersuccessComponent},
   {path:'ownerregistration',component:OwnerregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
