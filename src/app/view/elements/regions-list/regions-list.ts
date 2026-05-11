import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-regions-list',
  imports: [],
  templateUrl: './regions-list.html',
  styleUrl: './regions-list.css'
})
export class RegionsList {
  public regions: InputSignal<string[]> = input<string[]>([]);
  public regionSelected: OutputEmitterRef<string> = output<string>();

  public onSelectRegion(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.regionSelected.emit(select.value);
  }
}