import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainCardComponent } from './components/cards/main-card/main-card.component';
import { SummaryCardComponent } from './components/cards/summary-card/summary-card.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DetailsSummaryCardComponent } from './components/cards/details-summary-card/details-summary-card.component';
import { ExerciceComponent } from './components/exercice/exercice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MainCardComponent,
    SummaryCardComponent,
    SummaryComponent,
    DetailsSummaryCardComponent,
    ExerciceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
