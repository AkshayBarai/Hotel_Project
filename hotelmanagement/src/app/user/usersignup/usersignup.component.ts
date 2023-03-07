import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss']
})
export class UsersignupComponent {
  signUpForm!:FormGroup;
  formdata:any
  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit() {
    this.formValidation();
   }

   signUpData(){
    this.formdata =this.signUpForm.value
    console.log(this.formdata ,"this.signUpForm");
    
   }
  // signUpData(){
  //   console.log(this.signUpForm.value ,"this.signUpForm");
    

  // }
  formValidation(){
    this.signUpForm = this.formBuilder.group({
      userName:new FormControl ('',[Validators.pattern("^[a-zA-Z]+$")]),
      userEmail:['',[Validators.required,Validators.email]],
      userMob:['',[Validators.pattern,Validators.maxLength(10),Validators.minLength(10)]],
      gender:['',[Validators.required]],
      userpass:['',[Validators.pattern,Validators.required]],
      userCheck:['',[Validators.requiredTrue]]
    })
  }




}
