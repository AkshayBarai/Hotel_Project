import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
 selectModule!:string;
  url!:string

  constructor( private httpClient : HttpClient) { }

  moduleNavigation(module: any) {
    this.selectModule = module;
    console.log(this.selectModule,"this.selectModule");
    this.url =`http://localhost:3000/${module}`;
    // this.url ="http://localhost:3000/" + module;
    console.log(this.url ,"this.url");
    
    

  }
  postApi(user: any) {
   return this.httpClient.post(this.url,user)
  }

  getApiCall () {
 return this.httpClient.get(this.url)
}

  
}
