import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StationService } from '../shared/services/station.service';
import { Observable } from 'rxjs';
import { SchemeId, Station, StationData } from '../shared/models/station';
import { StationTableComponent } from './station-table/station-table.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { environment } from '../../environments/environment';
import { StationFilterComponent } from './station-filter/station-filter.component';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [
    CommonModule,
    StationTableComponent,
    LoaderComponent,
    StationFilterComponent,
  ],
  templateUrl: './station.component.html',
  styleUrl: './station.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationComponent implements OnInit {
  stations$ = new Observable<Station[]>();
  schemeId = SchemeId.All;

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.stations$ = this.getStations();
  }

  getStations(): Observable<Station[]> {
    const data: StationData = {
      key: environment.apiKey,
      schemeId: this.schemeId,
    };

    return this.stationService.getStations(data);
  }

  onSchemeIdChange(schemeId: number): void {
    this.schemeId = schemeId;
    this.stations$ = this.getStations();
  }
}
