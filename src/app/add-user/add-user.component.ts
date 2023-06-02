import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Person} from '../model/person.model';
import {User} from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  myForm!: FormGroup
  formSubmitted = false;
  users: User[] = []

  constructor(
    private fb: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe( v  => this.users = v)

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      username:['', [Validators.required, Validators.minLength(3)]],
      boss: this.fb.group({
        id: '',
      })
    })
  }

  submitForm() {
    this.formSubmitted = true;
    if(this.myForm.valid){
      this.userService.add(this.myForm.value).subscribe()
      console.log(this.myForm.value)
    }
  }

  getFormGroup(): FormGroup{
    return (this.myForm.get("boss") as FormGroup)
  }
}
/*

/products/add --> ProductAdd
   form -> submit vers API
 */
/**
 *
 * 1/ Ajouter un champs id dans un formGroup 'supplier'
 * 1-1/ Créer un model Supplier (supplier.model.ts)
 * 2-1/ Créer un service pour les suppliers
 * 2-2/ Récuperer les suppliers de l'api localhost:/....../suppliers
 *   2-a/ div ou autre, avec formGroupName supplier
 *   2-b/ select avec formControlName=id
 *   2-c/ *ngFor sur option
 */
