import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {API_URL} from '../enc';
import { JobComponent } from './job.component';
import { catchError } from 'rxjs/operators';
//for throw:
import { Observable, throwError } from 'rxjs';

@Injectable()
export class JobService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getJobs(): Observable<any> {
    return this.http
      .get(`${API_URL}/findAll`)
      .pipe(catchError(this.erroHandler)); }


  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');}}

