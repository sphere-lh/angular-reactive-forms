import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  title = 'My form';

  // Modelo para capturar los valores del formulario
  formData = {
    textInput: 'Omar',
    selectedOption: '',
    isChecked: false,
  };

  // Opciones para el select
  options = ['Perú', 'Chile', 'Argentina'];

  // Método para guardar y mostrar en la consola los valores del formulario
  saveForm() {
    console.log('Form Data:', this.formData);
  }
}
