import { Component } from '@angular/core';

@Component({
  selector: 'app-ownersignin',
  templateUrl: './ownersignin.component.html',
  styleUrls: ['./ownersignin.component.scss']
})
export class OwnersigninComponent {
  submit(data:any){
    console.log(data,'data');
    
 }
}
