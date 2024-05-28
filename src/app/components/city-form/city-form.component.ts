import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './city-form.component.html',
  styleUrl: './city-form.component.scss'
})
export class CityFormComponent {

  mForm = this.fb.group({
    nombreCiudad: ["", [Validators.required]],
    pais: ["", [Validators.required]],
    anho: ["", [Validators.required]]
  })

  @Output() ciudades = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  sendForm(){
    console.log(this.mForm.value)
    this.ciudades.emit(this.mForm.value)

  }
}
