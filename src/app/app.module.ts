import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCustomComponentComponent } from './my-first-custom-component/my-first-custom-component.component';
import { InterpolationComponent} from './interpolation-practise/interpolation'

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCustomComponentComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
