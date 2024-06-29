import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StationService } from '../shared/services/station.service';
import { Observable } from 'rxjs';
import { Station } from '../shared/models/station';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './station.component.html',
  styleUrl: './station.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationComponent implements OnInit {
  stations$ = new Observable<Station[]>();

  constructor(private stationService: StationService) {}

  ngOnInit(): void {}
}
