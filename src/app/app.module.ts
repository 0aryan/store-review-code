import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent], // components, directives, pipes
  imports: [BrowserModule, SharedModule, AppRoutingModule], // components, directives, pipes and & modules from other module
  // app module place should always be last
  exports: [], // components, directives, pipes to be exported to other modules
  bootstrap: [AppComponent], // components that can be bootstrapped
})
export class AppModule {}
