import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-section',
  templateUrl: './blue-section.component.html',
  styleUrls: ['./blue-section.component.css'],
})
export class BlueSectionComponent {
  @Input() sectionData: any;
}
