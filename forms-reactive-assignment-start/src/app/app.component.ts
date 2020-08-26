import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './cutom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ProjectForm : FormGroup;

  ngOnInit(){
    this.ProjectForm = new FormGroup({
      'projectName': new FormControl(null,[Validators.required,CustomValidators.InvalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'email'      : new FormControl(null,[Validators.required,Validators.email]),
      'projectStatus'     : new FormControl('critical')
    });
 }
 onsaveProject(){
   console.log(this.ProjectForm.value);
 }
}
