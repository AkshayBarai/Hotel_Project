import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss']
})
export class UsersignupComponent {
  signUpForm!:FormGroup;
  formdata?:any
  getApiRes?:any;
  constructor(private formBuilder:FormBuilder, private dataService :DataService ,
    private router : Router){}
  
  ngOnInit() {
    this.formValidation();
   }

   signUpData(){
    this.formdata =this.signUpForm.value
    console.log(this.formdata ,"this.signUpForm");
    this.dataService.postApi(this.formdata).subscribe(resPara=>{
      this.getApiRes = resPara
      console.log(resPara ,"resPara");
    
      if(this.getApiRes){
        if(this.dataService.journeyName == "users"){
          this.router.navigateByUrl('/user/usersuccess')
        }
      }
    })

    
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
