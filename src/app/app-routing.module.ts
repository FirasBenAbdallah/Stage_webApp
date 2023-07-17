import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexAnneeComponent } from './index-annee/index-annee.component';
import { NewAnneComponent } from './new-anne/new-anne.component';
import { IndexProjetComponent } from './index-projet/index-projet.component';
import { NewProjetComponent } from './new-projet/new-projet.component';

const routes: Routes = [
  { path: 'index', component: IndexAnneeComponent },
  { path: 'projet', component: IndexProjetComponent },
  { path: 'new', component: NewAnneComponent },
  { path: 'newProjet', component: NewProjetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
