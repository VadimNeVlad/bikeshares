import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-station-filter',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './station-filter.component.html',
  styleUrl: './station-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationFilterComponent {
  @Input() schemeId = -1;
  @Output() schemeIdChange = new EventEmitter<number>();

  selectedOption = -1;
  options: any = [
    { value: -1, viewValue: 'All' },
    { value: 1, viewValue: 'Waterford' },
    { value: 2, viewValue: 'Cork' },
    { value: 3, viewValue: 'Limerick' },
    { value: 4, viewValue: 'Galway' },
  ];

  constructor() {}

  onSchemeIdChange(schemeId: number): void {
    this.schemeIdChange.emit(schemeId);
  }
}
