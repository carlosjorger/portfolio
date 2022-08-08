import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DelayTimeServiceService {

  constructor() { }
  public async delayTime(seconds:number,func:()=>void){
    console.log(seconds)
    await this.delay(seconds*1000).then(func);
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
