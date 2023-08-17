import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css'],
})
export class TestimoniesComponent {
  @Input() testimoniesData: any;
}
