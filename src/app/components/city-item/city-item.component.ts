import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-city-item',
  standalone: true,
  imports: [],
  templateUrl: './city-item.component.html',
  styleUrl: './city-item.component.scss'
})
export class CityItemComponent {

  @Input() ciudadInput: any; 

}
