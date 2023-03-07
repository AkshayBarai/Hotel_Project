import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent {

constructor(private dataService : DataService){}

url ="http://localhost:3000/post";
getApiData:any;
   submit(data:any){
    // console.log(data,'data');
    // this.dataService.getApi(this.url).subscribe(respara=>{
    //      this.getApiData = respara
    //      console.log(this.getApiData,"this.getApiData");
         
    }
    
//  }
}
