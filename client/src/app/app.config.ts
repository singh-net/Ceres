import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './_interceptors/error-interceptor';
import { jwtInterceptor } from './_interceptors/jwt-interceptor';
import { loadingInterceptor } from './_interceptors/loading-interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([errorInterceptor, jwtInterceptor, loadingInterceptor]), withFetch()),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-bottom-right',
    }),
    

    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    importProvidersFrom(NgxSpinnerModule)
  ]
};
