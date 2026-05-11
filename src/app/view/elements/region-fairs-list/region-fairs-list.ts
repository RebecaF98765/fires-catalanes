import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-region-fairs-list',
  imports: [],
  templateUrl: './region-fairs-list.html',
  styleUrl: './region-fairs-list.css'
})
export class RegionFairsList {
  public region: InputSignal<string> = input<string>("");
  public fairs: InputSignal<any[]> = input<any[]>([]);

  public favoriteSelected: OutputEmitterRef<any> = output<any>();
  public fairDetailsSelected: OutputEmitterRef<any> = output<any>();

  public onAddFavorite(fair: any): void {
    this.favoriteSelected.emit(fair);
  }

  public onShowDetails(fair: any): void {
    this.fairDetailsSelected.emit(fair);
  }
}