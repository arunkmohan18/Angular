import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AuthorsComponent } from './authors/authors.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';


export const approutes: Routes = [
  {path:'home',component:HomeComponent },
  {
    path:'',
    runGuardsAndResolvers: 'always',
    canActivate:[AuthGuard],
    children: [
      {path:'reviews',component:ReviewsComponent },
      {path:'authors',component:AuthorsComponent, },
      {path:'list',component:ListsComponent }
    ]
  },
  {path:'**',redirectTo:'home',pathMatch:'full' },
];
