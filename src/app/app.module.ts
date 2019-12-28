import { AppRoutingModule } from "./app-routing.module";
import { CountryService } from "./country.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AllCountriesComponent } from "./all-countries/all-countries.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    CountryDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
