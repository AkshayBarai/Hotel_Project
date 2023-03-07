import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router :Router){

  }
  Journey(journey:any){
     if(journey=='Admin'){
      this.router.navigateByUrl('/admin/adminland')
     }
     else if(journey=='Owner'){
      this.router.navigateByUrl('/owner/ownerland')
     }
     else{
      this.router.navigateByUrl('/user/userland')
     }
  }
}

