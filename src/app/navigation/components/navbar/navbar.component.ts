import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  readonly links: {
    label: string,
    routerLink: string
  }[] = [
    {
      label: 'Home',
      routerLink: '/'
    },
    {
      label: 'Todos',
      routerLink: '/todos'
    }
  ]

}
