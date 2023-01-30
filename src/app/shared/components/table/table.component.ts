import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface DataSourceProps {
  id: number
  name: string
}

@Component({
  selector: 'dio-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined

  dataSource: DataSourceProps[] = [
    { id: 1, name: 'teste' },
    { id: 2, name: 'teste 2' },
  ]

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    console.log(this.paginator);
  }

  pageChanged(page: any) {
    console.log(page)
  }
}
