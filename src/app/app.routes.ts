import { Routes } from '@angular/router';
import { CityFormComponent } from './components/city-form/city-form.component';
import { CityItemComponent } from './components/city-item/city-item.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: FavouritesComponent},
    {path: 'contact', component: ContactComponent}

];
