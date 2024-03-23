import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPgaeComponent } from './details-pgae/details-pgae.component';

const routes: Routes = [
  
  { path: 'details', component: DetailsPgaeComponent },  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
