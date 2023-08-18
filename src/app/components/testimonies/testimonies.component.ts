import { Component, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css'],
})
export class TestimoniesComponent {
  @Input() testimoniesData: any;

  constructor(protected uiService: UiService) {}
}
