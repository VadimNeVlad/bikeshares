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
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { Station } from '../../shared/models/station';

@Component({
  selector: 'app-station-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './station-table.component.html',
  styleUrl: './station-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationTableComponent implements OnInit, AfterViewInit {
  @Input() stations: Station[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<Station>;
  displayedColumns: string[] = [
    'name',
    'nameIrish',
    'bikesAvailable',
    'bikesAvailableTypeOne',
    'bikesAvailableTypeTwo',
    'docksAvailable',
    'docksCount',
    'schemeShortName',
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Station>(this.stations);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
