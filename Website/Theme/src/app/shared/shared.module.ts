import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { CarouselModule } from 'ngx-owl-carousel-o'
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'

import { ServicesComponent } from './services/services.component'
import { FeaturesComponent } from './features/features.component'
import { ClientComponent } from './client/client.component'
import { TeamComponent } from './team/team.component'
import { FaqComponent } from './faq/faq.component'
import { PricingComponent } from './pricing/pricing.component'
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'
import { ScrollspyDirective } from './scrollspy.directive'
import { LottieModule } from 'ngx-lottie'
import player from 'lottie-web'

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player
}
@NgModule({
  declarations: [
    ServicesComponent,
    FeaturesComponent,
    ClientComponent,
    TeamComponent,
    FaqComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
    ScrollspyDirective,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ScrollToModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    ServicesComponent,
    FeaturesComponent,
    ClientComponent,
    TeamComponent,
    FaqComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
    ScrollspyDirective,
  ],
})
export class SharedModule {}
