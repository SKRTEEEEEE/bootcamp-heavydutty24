import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from "ngxtension/computed-async"
import { toSignal } from "@angular/core/rxjs-interop"
import { MatAnchor } from "@angular/material/button"

@Component({
  
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent, MatAnchor],
  /*Cambiamos el nombre del selector de
  prueba1-bcsolana ... en selector y title
  por
  bob-root y bob

  */
  selector: 'bob-root',
  template: `
  <header class="p-8">
    <h1 class="text-5xl text-center mb-4 ">Hola, soy Bob</h1>
    <div class="flex justify-center mb-4">
      <hd-wallet-multi-button></hd-wallet-multi-button>
    </div>

    @if (account()) {
      <div class="absolute top-4 left-4 flex -jstify-center items-center gap-2">
        <!-- al poner el [src] le decimos a img que src puede cambiar -->
          <img [src]="account()?.info?.image" class="w-8 h-8" alt="">
          <p class="text-xl">{{account()?.balance}}</p>
      </div>
    }

      <nav>
        <ul class=" flex justify-center items-center gap-4">
          <!-- Se eliminan las comillas adicionales en las rutas -->
          <li><a [routerLink]="['']" mat-raised-button>Home</a></li>
          <li><a [routerLink]="['settings']" mat-raised-button>Settings</a></li>
        </ul>
      </nav>
  </header>
  <main>
    <router-outlet></router-outlet>
  </main>
  `
})
/*
Si queremos utilizar algo dentro de nuestra app de angual tenemos que hacer inject()
*/
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()), { requireSync: true })
}
