import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string = "assets/json";
  constructor(private httpClient: HttpClient) { }

  getOptionsInfo(): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return lastValueFrom(this.httpClient.get(`${this.baseUrl}/queryOptions.json`, httpOptions));
  }

  getStudentInfo(): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return lastValueFrom(this.httpClient.get(`${this.baseUrl}/student.json`, httpOptions));
  }

  getCurrentInfo(trimesterId: number, themeId: number): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    const info = {
      trimesterName: trimesterId,
      themeName: themeId
    }
    return lastValueFrom(this.httpClient.get(`${this.baseUrl}/queryInfoCurrent.json`, httpOptions, /*info*/));
  }

  getTrimesterInfo(trimesterId: number): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    const info = {
      trimesterName: trimesterId,
    }
    return lastValueFrom(this.httpClient.get(`${this.baseUrl}/queryInfoTrimester.json`, httpOptions, /*info*/));
  }

}
