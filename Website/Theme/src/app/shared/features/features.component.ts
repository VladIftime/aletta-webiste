import { Component, OnInit } from '@angular/core'
import { AnimationItem } from 'lottie-web'
import { AnimationOptions } from 'ngx-lottie'
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})

/**
 * Features component
 */
export class FeaturesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  options_industry: AnimationOptions = {
    path:
      '/assets/animations/Chat Bot Animation/Chat Bot Coloured/Chatbot Colour Animation.json',
  }
  options_academic: AnimationOptions = {
    path: '/assets/animations/Blogging Minimalistic/Blogging.json',
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem)
  }
}
