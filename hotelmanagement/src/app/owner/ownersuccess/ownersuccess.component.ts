import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
apidata:any;

constructor(private dataService :DataService, private router : Router){}

ngOnInit(){
  this.getHotelDetails();
 }

 getHotelDetails(){
   this.dataService.getHDcall().subscribe((data: any)=>{
     this.apidata = data;
     console.log(this.apidata,'this.apidata');
     
   })
 }
 async deleteData(id:any){
  
  this.apidata = await this.dataService.deleteApi(id).toPromise()
    console.log(this.apidata ,'delete api');
    
    this.getHotelDetails();
}
 async editData(id:any){
  this.dataService.dataId =id;
  this.dataService.getApiData = await this.dataService.getApiCallById(id).toPromise()
 
  this.router.navigateByUrl('/owner/ownerregistration')

}

ngOnDistroy(){
  this.dataService.newRegistration= false
}
}
