import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbRadioModule, NbThemeModule } from '@nebular/theme';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbThemeModule,
  NbInputModule,
  NbButtonModule,
  NbRadioModule,
  ]
})
export class HomeModule { }
