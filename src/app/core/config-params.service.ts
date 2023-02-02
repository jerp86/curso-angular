import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigParams } from '../shared/models/config-params';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  configureParameters({ field, limit, page, query }: ConfigParams): HttpParams {
    let httpParams = new HttpParams()
    httpParams = httpParams
      .set('_sort', 'id')
      .set('_order', 'desc')

    if (page) {
      httpParams = httpParams.set('_page', page.toString())
    }

    if (limit) {
      httpParams = httpParams.set('_limit', limit.toString())
    }

    if (query) {
      httpParams = httpParams.set('q', query)
    }

    if (field) {
      httpParams = httpParams.set(field.type, field.value.toString())
    }

    return httpParams
  }
}
