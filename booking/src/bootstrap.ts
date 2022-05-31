import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Theme } from './themeProvider'

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic([{provide: Theme, useValue:{}}]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
