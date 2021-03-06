import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressInterceptor } from './ng-progress.interceptor';
import { NgProgressHttpConfig, NG_PROGRESS_HTTP_CONFIG } from './ng-progress-http.interface';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ]
})
export class NgProgressHttpModule {
  static withConfig(config: NgProgressHttpConfig): ModuleWithProviders {
    return {
      ngModule: NgProgressHttpModule,
      providers: [
        { provide: NG_PROGRESS_HTTP_CONFIG, useValue: config }
      ]
    };
  }
}
