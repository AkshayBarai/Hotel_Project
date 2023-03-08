import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.scss']
})
export class UserlandingComponent {
  hideSignForm= false;
  responseData : any;

  constructor(private dataService :DataService){}
  submit(data:any){
    console.log(data,'data');
    this.dataService.getApiCall().subscribe(respara=>{
      this.responseData = respara ;
      console.log(this.responseData ,"this.responseData ");
      
    })
   
    

    
    
 }
 showSignForm(){
  this.hideSignForm = true
 }
}
