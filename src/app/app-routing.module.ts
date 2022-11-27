import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: '/dashboard'},
  {path: "dashboard", component: DashboardComponent},
  {path:"summary/:idtrimester/:idtheme", component: SummaryComponent},
  {path: "exercice/:idtheme", component: ExerciceComponent},
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
