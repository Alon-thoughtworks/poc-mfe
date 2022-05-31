import "zone.js";
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export class Theme {
  mainColor = "#fff";
  mainTextColor = "#fff";
  secondColor = "#fff";
}

const mount = (currentTheme: Theme) => {
  platformBrowserDynamic([{provide: Theme, useValue: currentTheme}])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export {mount}
