import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceScrollService } from './services/service-scroll.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  page: number = 0;
  constructor(private serviceScrollService: ServiceScrollService) {
    
  }
  ngOnInit(): void {
    this.serviceScrollService.keepTrackScroll().subscribe(
      async value => {
        this.page=value;        
      }
    );
  }
}
