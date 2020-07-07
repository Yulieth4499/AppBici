import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  public nameActive: string;
  public iduserActive: string; 
  public lockActive: string;
  public candActive: String; 
  public fechacandActive: String; 
}
