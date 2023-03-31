import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';
import { NameValidationDirective } from '../name-validation.directive';
import { MobValidationDirective } from '../mob-validation.directive';



@NgModule({
  declarations: [
    SearchPipe,
    NameValidationDirective,
    MobValidationDirective
  ],
  imports: [
    CommonModule
  ],

  exports:[
    SearchPipe,
    NameValidationDirective,
    MobValidationDirective
  ]
})
export class SharedModule { }
