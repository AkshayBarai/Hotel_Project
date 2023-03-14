import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerlanding',
  templateUrl: './ownerlanding.component.html',
  styleUrls: ['./ownerlanding.component.scss']
})
export class OwnerlandingComponent {


  constructor(private router : Router,private dataService :DataService){}



  newRegistration(){
    this.dataService.newRegistration = true
    this.router.navigateByUrl('/owner/ownerregistration')
  }
  hotelDetails(){
    this.dataService.newRegistration = false;
  this.router.navigateByUrl('/owner/ownersuccess')
  }
}
