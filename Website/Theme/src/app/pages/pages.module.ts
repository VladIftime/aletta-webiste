import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LottieModule } from 'ngx-lottie'
import player from 'lottie-web'

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'
import { NgxTypedJsModule } from 'ngx-typed-js'
import { NgParticlesModule } from 'ng-particles'
import { CarouselModule } from 'ngx-owl-carousel-o'

import { PagesRoutingModule } from './pages-routing.module'

import { SharedModule } from '../shared/shared.module'
import { Index8Component } from './index8/index8.component'
import { LoginComponent } from './login/login.component'
import { PasswordForgetComponent } from './password-forget/password-forget.component'
import { SignupComponent } from './signup/signup.component'

export function playerFactory() {
  return player
}
@NgModule({
  declarations: [
    Index8Component,
    LoginComponent,
    PasswordForgetComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    NgxTypedJsModule,
    NgParticlesModule,
    CarouselModule,
  ],
})
export class PagesModule {}
