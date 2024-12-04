import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer, Subject } from 'rxjs';

import { FirestoreService } from '../../services/firestore.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-tambah',
  standalone: true,
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './tambah.component.html',
  styleUrls: ['./tambah.component.css']
})
export class TambahComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  validateForm: any;
  //ini untuk mengambil firestorenya yang udh di import
  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: this.fb.control('', [Validators.required], [this.userNameAsyncValidator]),
      age: this.fb.control('', [Validators.required, Validators.min(18)]),
      address: this.fb.control('', [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const formData = this.validateForm.value;

      // Menggunakan layanan FirestoreService untuk menambahkan dokumen
      this.firestoreService
        .addDocument('users', formData) // Pemanggilan disesuaikan dengan definisi layanan terbaru
        .then(() => {
          console.log('Data saved successfully!');
          this.validateForm.reset();
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    } else {

      Object.values(this.validateForm.controls).forEach((control) => {
        const typedControl = control as AbstractControl;
        if (typedControl.invalid) {
          typedControl.markAsDirty();
          typedControl.updateValueAndValidity();
        }
      });
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  userNameAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  }
}
