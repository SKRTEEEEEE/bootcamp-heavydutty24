import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  /*Cambiamos el nombre del selector de
  prueba1-bcsolana ... en selector y title
  por
  bob-root y bob

  */
  selector: 'bob-root',
  template: `
  <header>
  <h1>Hola, soy Bob</h1>
</header>
  `
})
export class AppComponent {
  title = 'bob';
}
