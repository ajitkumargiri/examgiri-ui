import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbSidebarService,
  NbThemeModule,
  NbIconModule,
  NbMenuModule,
  NbMenuService,
  NbRadioModule,
  NbCardModule,
  NbInputModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent } from './layouts/footer/footer.component';
import { ErrorComponent } from './layouts/error/error.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MainComponent } from './layouts/main/main.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HomeModule } from './home/home.module';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorComponent,
    NavbarComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    UsersComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbMenuModule.forRoot(),
    NbButtonModule,
    HomeModule,
    NbIconModule,
    NbMenuModule,
    NbEvaIconsModule,
    NbRadioModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    UsersModule,
  ],
  providers: [NbSidebarService, NbMenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
