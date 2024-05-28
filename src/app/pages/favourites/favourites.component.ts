import { Component } from '@angular/core';
import { CityFormComponent } from '../../components/city-form/city-form.component';
import { CityItemComponent } from '../../components/city-item/city-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CityFormComponent, CityItemComponent, NgFor],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {

  ciudades: any [] = []

  addCiudad(ciudad: any){
    this.ciudades.push(ciudad)
  }

}
