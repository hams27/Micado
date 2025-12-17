import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html'
})
export class NavBar {

  constructor(private router: Router) {}

  goToFilterByCategory(category: string) {
    this.router.navigate(['/fillter'], {
      queryParams: { category }
    });
  }

  goToFilterByBrand(brand: string) {
    this.router.navigate(['/fillter'], {
      queryParams: { brand }
    });
  }

}
