import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  public fair: any = null;

  constructor(private router: Router) {
    const data = localStorage.getItem("CURRENT_FAIR");

    if (data != null) {
      this.fair = JSON.parse(data);
    }
  }

  public onBack(): void {
    this.router.navigate(['/home']);
  }
}