import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Station } from '../../shared/models/station';

@Component({
  selector: 'app-station-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './station-table.component.html',
  styleUrl: './station-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationTableComponent implements OnInit, AfterViewInit {
  @Input() stations: Station[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<Station>;
  displayedColumns: string[] = [
    'name',
    'irish name',
    'bikes available',
    'docks available',
    'docks count',
    'city',
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Station>(this.stations);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
