import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router :Router , private dataService : DataService){

  }
  // Journey(journey:any){
  //    if(journey=='Admin'){
  //     this.router.navigateByUrl('/admin/adminland')
  //    }
  //    else if(journey=='Owner'){
  //     this.router.navigateByUrl('/owner/ownerland')
  //    }
  //    else{
  //     this.router.navigateByUrl('/user/userland')
  //    }
  // }

  adminSelected(){
   let selectModule = "admins";
   this.dataService.moduleNavigation(selectModule);
   this.router.navigateByUrl('/admin/adminland')
  }

ownerSelected(){
  let selectModule = "owners";
  this.dataService.moduleNavigation(selectModule);
  this.router.navigateByUrl('/owner/ownerland')
}
  
userSelected(){
  let selectModule = "users";
   this.dataService.moduleNavigation(selectModule);
   this.router.navigateByUrl('/user/userland')
}
}

