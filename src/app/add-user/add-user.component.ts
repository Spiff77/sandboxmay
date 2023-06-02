import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  myForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      username:''
    })
  }

  submitForm() {
    console.log(this.myForm.value)
    this.userService.add(this.myForm.value).subscribe()
  }
}
/*

/products/add --> ProductAdd
   form -> submit vers API
 */
