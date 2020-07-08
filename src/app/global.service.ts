import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  public nameActive: string;
  public iduserActive: string; 
  public lockActive: string;
  public candActive: string; 
  public fechacandActive: string; 
  public estCanActive: string;
  public colorEst: string;
  public imgCand: string; 
}
