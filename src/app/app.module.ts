import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './components/shipping/shipping.component';
import { SigninComponent } from './components/signin/signin.component';
import { ManualSubscriptionComponent } from './components/manual-subscription/manual-subscription.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ShippingComponent,
    SigninComponent,
    ManualSubscriptionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
