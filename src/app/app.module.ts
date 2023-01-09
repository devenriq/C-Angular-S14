import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { FilterOrderPipePipe } from './filter-order-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterOrderPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
