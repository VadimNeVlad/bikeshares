import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StationService } from '../shared/services/station.service';
import { Observable } from 'rxjs';
import { Station } from '../shared/models/station';
import { StationTableComponent } from './station-table/station-table.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [CommonModule, StationTableComponent, LoaderComponent],
  templateUrl: './station.component.html',
  styleUrl: './station.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationComponent implements OnInit {
  stations$ = new Observable<Station[]>();

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.stations$ = this.getStations();
  }

  getStations(): Observable<Station[]> {
    const data = {
      key: '18b096abe6cc5cf2d5abe07630595b646ea9417e4af70e109bb5cab2d6956e11',
      schemeId: -1,
    };

    return this.stationService.getStations(data);
  }
}
