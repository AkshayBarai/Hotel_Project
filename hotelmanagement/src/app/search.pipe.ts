import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    console.log(value , 'value');
    
    if(!value){
      return null;
    }
    if(!searchText){
      return value;
    }

    searchText = searchText?.toLowerCase();
    return value.filter((ele:any)=>{
      return JSON.stringify(ele).toLowerCase().includes(searchText)
    })
    
  }

}
