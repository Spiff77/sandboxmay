import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  names = ['Florian', 'Daniel']

}
/**
  /home -> HomeComponent
  /products -> ProductList --> Affiche une liste de produit, le clique sur un lien redirige vers le détail de ce produit
  /products/:id --> DetailProduct
  / -- redirect --> /home
 */

/*
STEPS:
 - Route app.module.ts
 - Créer le composant
  - Récuperer la variable d'url  ex: 9  de '/products/9'
 - Liens sur productComponent et lien vers list sur detailComponent
 - Méthode findOne(id: number): Observable<Produit> dans ProductService
 */
