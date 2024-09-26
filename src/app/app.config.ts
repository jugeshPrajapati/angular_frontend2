import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authInterceptor } from '../customs/services/auth.interceptor';
import { loggingInterceptor } from '../customs/services/logging.interceptor';
import {
  provideHttpClient,
  withInterceptors,
  withFetch,
} from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),

    // provideHttpClient() is the Angular function used to configure the global HttpClient in your application.
    // This is typically done during app initialization (in main.ts or AppModule).
    // It allows you to add features such as interceptors, or use the modern fetch API for HTTP requests.
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor]),
      withFetch()
    ),
  ],
};
