import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LottieModule } from 'ngx-lottie'
import player from 'lottie-web'

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player
}
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
