import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.scss']
})
export class UserlandingComponent {
  hideSignForm= false;
  responseData : any;
  signINForm: any;
  signInForm: any;

  constructor(private dataService :DataService, private router : Router){}
  

  async submit(data:any){
    console.log(data,'data');
    this.signInForm = data;
    //console.log(this.signInForm,'this.signInForm');
    
    this.responseData = await this.dataService.getApiCall().toPromise()
    console.log(this.responseData ,"this.responseData ");
      
    if(this.responseData){
      let journey = this.responseData.find((ele :any)=>{
        return this.signInForm.userName == ele.userName && this.signInForm.password == ele.userpass
      })
      if(journey){
        alert('Login Successful')
        this.router.navigateByUrl('/user/usersuccess');
      }
      else{
        alert('user not found')
        this.router.navigateByUrl('/user/userland')

      }
    }
   
    

    
    
 }
 showSignForm(){
  this.hideSignForm = true
 }
}
