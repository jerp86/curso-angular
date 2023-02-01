import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface AlertProps {
  title?: string
  description?: string
  successButton?: string
  cancelButton?: string
  colorButton?: string
  hasCloseButton?: boolean
}

@Component({
  selector: 'dio-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  title?: string
  description?: string
  successButton?: string
  cancelButton?: string
  colorButton?: string
  hasCloseButton?: boolean

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertProps,
  ) {}

  ngOnInit(): void {
    this.title = this.data?.title || 'Sucesso!'
    this.description = this.data?.description || 'Seu registro foi salvo com sucesso!'
    this.successButton = this.data?.successButton || 'OK'
    this.cancelButton = this.data?.cancelButton || 'Cancelar'
    this.colorButton = this.data?.colorButton || 'primary'
    this.hasCloseButton = this.data?.hasCloseButton || false
  }
}
