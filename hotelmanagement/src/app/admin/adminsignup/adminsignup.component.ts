import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {

  signUpForm!:FormGroup;
  formdata:any
  getApiRes: any;
  constructor(private formBuilder:FormBuilder ,private dataService :DataService,
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
        if(this.dataService.journeyName == "admins"){
          this.router.navigateByUrl('/admin/adminsuccess')
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
