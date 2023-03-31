import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import {MatTableModule} from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from '../shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    UserlandingComponent,
    UsersigninComponent,
    UsersignupComponent,
    UsersuccessComponent,
    HotelbookingComponent,
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    MatTableModule,
    Ng2SearchPipeModule,
    FormsModule,
    SharedModule,
    MatRadioModule,
    
  ]
})
export class UserModule { }
