import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewletterResponse{
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class NewletterService {
  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty8aegep.lambda-url.us-east-1.on.aws/'

  constructor(private http: HttpClient) { }

  sendData(name: string, email:string) :Observable<NewletterResponse>{
    const data = {name, email}

    return this.http.post<NewletterResponse>(this.endpointUrl, data);
  }
}
