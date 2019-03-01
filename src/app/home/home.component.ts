import { Component, OnInit } from '@angular/core';

import { HomeService } from "../services/home.service";
import { GridOptions } from "ag-grid-community";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'app';
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private sideBar;
  private statusBar;
  private rowData: [];



  gridOptions: GridOptions;

  constructor(private _homeService: HomeService) {
    this.columnDefs = [
      { headerName: '#', width: 80, field: 'id' },
      { headerName: 'Name', field: 'name', filter: 'agTextColumnFilter', sortable: true },
      { headerName: 'User Name', field: 'username' },
      { headerName: 'Email', field: 'email', editable: true },
      { headerName: 'Phone', field: 'phone', editable: true },
      { headerName: 'Website', field: 'website', editable: true }
    ];
    this.defaultColDef = {
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      pagination: true
    };
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this
      }
    };
    // this.gridOptions.rowData = this.createRowData();
    // this.gridOptions.columnDefs = this.createColumnDefs();
  }

  ngOnInit() {

  }

  onGridReady(params) {
    this.gridOptions.api = params.api;
    this._homeService.getData().subscribe(res => {
      this.gridOptions.api.setRowData(res);
    }, err => { });
  }

}
