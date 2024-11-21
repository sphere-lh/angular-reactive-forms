import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatError,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  title = 'My Reactive form';

  // Opciones para el select
  options = ['Perú', 'Chile', 'Argentina'];

  // Modelo para capturar los valores del formulario
  form: FormGroup = new FormGroup({});

  ngOnInit() {
    this.form = new FormGroup({
      textInput: new FormControl('Omar', [Validators.required]),
      selectedOption: new FormControl('', [Validators.required]),
      isChecked: new FormControl(false),
    });
  }

  // Método para guardar y mostrar en la consola los valores del formulario
  saveForm() {
    if (this.form.valid) {
      console.log('Form is valid:', this.form.value);
    } else {
      console.log('Form is invalid:', this.form.value);
    }
  }
}
