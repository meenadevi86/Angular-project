import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { AdminFormComponent } from './adminform/adminform.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    AdminFormComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
