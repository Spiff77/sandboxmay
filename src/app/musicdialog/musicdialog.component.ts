import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ɵFormGroupValue, ɵTypedOrUntyped} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-musicdialog',
  templateUrl: './musicdialog.component.html',
  styleUrls: ['./musicdialog.component.css']
})
export class MusicdialogComponent implements OnInit{
  zikForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<MusicdialogComponent>) {
  }

  ngOnInit(): void {
    this.zikForm = this.fb.group({
        'rock': false,
        'rap': false,
        'blues': false,
        'classique': false,
    })
  }

   close() {
      this.dialogRef.close('hello')
  }
}
