import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  /*Cambiamos el nombre del selector de
  prueba1-bcsolana ... en selector y title
  por
  bob-root y bob

  */
  selector: 'bob-root',
  template: `
  <header class="p-8">
    <h1 class="text-5xl text-center mb-4 ">Hola, soy Bob</h1>
    <div class="flex justify-center">
      <hd-wallet-multi-button></hd-wallet-multi-button>
    </div>
  </header>
  `
})
export class AppComponent {
  title = 'bob';
}
