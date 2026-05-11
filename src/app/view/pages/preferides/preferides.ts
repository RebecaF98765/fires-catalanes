import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferides',
  imports: [],
  templateUrl: './preferides.html',
  styleUrl: './preferides.css'
})
export class Preferides {
  public favoriteFairs: any[] = [];

  constructor(private router: Router) {
    this.restoreFavorites();
  }

  public restoreFavorites(): void {
    const data = localStorage.getItem("FAVORITE_FAIRS");

    if (data != null) {
      this.favoriteFairs = JSON.parse(data);
    }
  }

  public saveFavorites(): void {
    localStorage.setItem("FAVORITE_FAIRS", JSON.stringify(this.favoriteFairs));
  }

  public onRemoveFavorite(fair: any): void {
    this.favoriteFairs = this.favoriteFairs.filter(f => f.activityId != fair.activityId);
    this.saveFavorites();
  }

  public onShowDetails(fair: any): void {
    localStorage.setItem("CURRENT_FAIR", JSON.stringify(fair));
    this.router.navigate(['/details']);
  }
}