import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from '../../models/alert';

@Component({
  selector: 'dio-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  alert = {} as Alert

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert,
  ) {}

  ngOnInit(): void {
    this.alert.title = this.data?.title || 'Sucesso!'
    this.alert.description = this.data?.description || 'Seu registro foi salvo com sucesso!'
    this.alert.successButton = this.data?.successButton || 'OK'
    this.alert.cancelButton = this.data?.cancelButton || 'Cancelar'
    this.alert.colorButton = this.data?.colorButton || 'primary'
    this.alert.hasCloseButton = this.data?.hasCloseButton || false
  }
}
