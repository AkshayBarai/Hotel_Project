import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectModule!:string;
  url!:string
  journeyName!:string;
  urlHotelDetails= 'http://localhost:3000/hotelDetails';
  urlHotelBooking= 'http://localhost:3000/hotelBooking';
  dataId:any;
  getApiData:any;
  newRegistration: boolean =false;
  hotelListByOwnerName: any;
  storeData: any;
 

  constructor( private httpClient : HttpClient) { }

moduleNavigation(module: any) {
    this.journeyName = module;
    this.selectModule = module;
    console.log(this.selectModule,"this.selectModule");
    this.url =`http://localhost:3000/${module}`;
    // this.url ="http://localhost:3000/" + module;
    console.log(this.url ,"this.url");
  }
 
 //SignUp Data post Api of owner user admin 
postApi(user: any) {
   return this.httpClient.post(this.url,user)
  }

  //SignIn Data get Api of owner user admin 
getApiCall () {
  return this.httpClient.get(this.url)
}

//ownerregistratin post Api
postApicall(data:any){
  return this.httpClient.post(this.urlHotelDetails,data)
}

  // putApiCall(id:any,body:any){
  //   return this.httpClient.put(this.urlHotelDetails + "/"+id,body)
  // }
//getApi for hotel details  
getHDcall(){
  return this.httpClient.get(this.urlHotelDetails)
}

deleteApi(id:any){
  return this.httpClient.delete(this.urlHotelDetails + "/" +id)
}

//Post For Hotelbooking
postApiHotelBook(data:any) {
  return this.httpClient.post(this.urlHotelBooking,data)
}

getApiCallById(id:any){
  return this.httpClient.get(this.urlHotelDetails + "/" +id)
}
}
