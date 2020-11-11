import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'app/shared/shared.module';
import { LOGIN_ROUTE } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AppSharedModule, RouterModule.forChild([LOGIN_ROUTE])]
})
export class LoginModule {}
