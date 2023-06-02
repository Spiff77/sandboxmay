import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => this.router.navigateByUrl('/user'), 5000)
  }
}

/**
 * Redirection sur click général de app-product: HostListener
 * Dans product-detail --> Rajouter un bouton "Remove" avec confirmation de suppression
 *   --> Si non, on fait disparaitre la boite
 *   --> So oui --> navigate via la liste

  HINT:
    Call du service pour suppression
    Redirection
      ....subscribe( v => this.router.navigateByUrl(...))

 */

