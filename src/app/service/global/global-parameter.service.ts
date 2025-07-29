import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalParameterService {

  constructor() { }

  public primaryURL: string = 'http://localhost:3000';
}
