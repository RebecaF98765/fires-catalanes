
import { Component, signal, WritableSignal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CATALAN_FAIRS } from './model/fairs';

import { Header } from './view/layout/header/header';
import { RegionsList } from './view/elements/regions-list/regions-list';
import { RegionFairsList } from './view/elements/region-fairs-list/region-fairs-list';

@Component({
  selector: 'app-root',
  imports: [Header, RegionsList, RegionFairsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public fairs: any[] = CATALAN_FAIRS;
  public regions: string[] = [];
  public favoriteFairs: any[] = [];

  public selectedRegion: WritableSignal<string> = signal("");

  constructor() {
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

  public saveFavorites(): void {
    localStorage.setItem("FAVORITE_FAIRS", JSON.stringify(this.favoriteFairs));
  }

  public restoreFavorites(): void {
    const data = localStorage.getItem("FAVORITE_FAIRS");

    if (data != null) {
      this.favoriteFairs = JSON.parse(data);
    }
  }

  public onRemoveFavorite(fair: any): void {
    this.favoriteFairs = this.favoriteFairs.filter(
      f => f.activityId != fair.activityId
    );

    this.saveFavorites();
  }

  public currentPage: WritableSignal<string> = signal("home");
  public previousPage: WritableSignal<string> = signal("home");
  public selectedFair: any = null;

  public onPageSelected(page: string): void {
    this.currentPage.set(page);
  }

  public onShowDetails(fair: any): void {
    this.previousPage.set(this.currentPage());
    this.selectedFair = fair;
    this.currentPage.set("details");
  }

  public onBack(): void {
    this.currentPage.set(this.previousPage());
  }
}