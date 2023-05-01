import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExplComponent } from './expl/expl.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { FlComponent } from './fl/fl.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ExpCComponent } from './exp-c/exp-c.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProjectPageComponent } from './project-page/project-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { DpComponent } from './dp/dp.component';
import { NavComponent } from './nav/nav.component';
import { PcardComponent } from './pcard/pcard.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TcardComponent } from './tcard/tcard.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExplComponent,
    FlComponent,
    ExpCComponent,
    ProjectPageComponent,
    TaskPageComponent,
    DpComponent,
    NavComponent,
    PcardComponent,
    FooterComponent,
    TcardComponent,
    LandingComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
