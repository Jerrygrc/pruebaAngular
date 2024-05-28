import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityFormComponent } from './components/city-form/city-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CityFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ciudades-app';
}
