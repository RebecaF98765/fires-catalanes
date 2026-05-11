import { Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public pageSelected: OutputEmitterRef<string> = output<string>();

  public onSelectPage(page: string): void {
    this.pageSelected.emit(page);
  }
}