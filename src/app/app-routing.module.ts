import { HomeModule } from './shared/components/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, 
    children: [{
      path: "", 
      loadChildren: () => import("./shared/components/home/home.module").then( (home) => home.HomeModule ),
      },
    ],
},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
