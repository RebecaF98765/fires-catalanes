import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

import { CATALAN_FAIRS } from '../../../model/fairs';
import { RegionsList } from '../../elements/regions-list/regions-list';
import { RegionFairsList } from '../../elements/region-fairs-list/region-fairs-list';

@Component({
  selector: 'app-home',
  imports: [RegionsList, RegionFairsList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public fairs: any[] = CATALAN_FAIRS;
  public regions: string[] = [];
  public favoriteFairs: any[] = [];

  public selectedRegion: WritableSignal<string> = signal("");

  constructor(private router: Router) {
    const allRegions = this.fairs.map(fair => fair.regionName);
    this.regions = [...new Set(allRegions)];

    this.restoreFavorites();
  }

  public onRegionSelected(region: string): void {
    this.selectedRegion.set(region);
  }

  public get selectedFairs(): any[] {
    return this.fairs.filter(fair => fair.regionName == this.selectedRegion());
  }

  public onAddFavorite(fair: any): void {
    const exists = this.favoriteFairs.find(f => f.activityId == fair.activityId);

    if (!exists) {
      this.favoriteFairs.push(fair);
      this.saveFavorites();
    }
  }

  public onRemoveFavorite(fair: any): void {
    this.favoriteFairs = this.favoriteFairs.filter(f => f.activityId != fair.activityId);
    this.saveFavorites();
  }

  public saveFavorites(): void {
    localStorage.setItem("FAVORITE_FAIRS", JSON.stringify(this.favoriteFairs));
  }

  public restoreFavorites(): void {
    const data = localStorage.getItem("FAVORITE_FAIRS");

    if (data != null) {
      this.favoriteFairs = JSON.parse(data);
    }
  }

  public onShowDetails(fair: any): void {
    localStorage.setItem("CURRENT_FAIR", JSON.stringify(fair));
    this.router.navigate(['/details']);
  }
}