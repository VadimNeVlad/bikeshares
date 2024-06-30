import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { SchemeId, StationOption } from '../../shared/models/station';

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

  selectedOption = SchemeId.All;

  options: StationOption[] = [
    { value: SchemeId.All, viewValue: 'All' },
    { value: SchemeId.Waterford, viewValue: 'Waterford' },
    { value: SchemeId.Cork, viewValue: 'Cork' },
    { value: SchemeId.Limerick, viewValue: 'Limerick' },
    { value: SchemeId.Galway, viewValue: 'Galway' },
  ];

  constructor() {}

  onSchemeIdChange(schemeId: number): void {
    this.schemeIdChange.emit(schemeId);
  }
}
