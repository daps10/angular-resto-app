import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { RestaurantsModule } from './restaurants/restaurants.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    AuthModule,
    RestaurantsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
