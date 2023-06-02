import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  myForm!: FormGroup
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      username:['', [Validators.required, Validators.minLength(3)]]
    })
  }

  submitForm() {
    this.formSubmitted = true;
    if(this.myForm.valid){
      this.userService.add(this.myForm.value).subscribe()
      console.log(this.myForm.value)
    }
  }
}
/*

/products/add --> ProductAdd
   form -> submit vers API
 */
