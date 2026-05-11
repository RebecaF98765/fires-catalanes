import { Component, output, OutputEmitterRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public pageSelected: OutputEmitterRef<string> = output<string>();

  public onSelectPage(page: string): void {
    this.pageSelected.emit(page);
  }
}