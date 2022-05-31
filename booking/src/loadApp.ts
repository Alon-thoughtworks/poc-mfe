import "zone.js";
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import { Theme } from './themeProvider'

if (environment.production) {
  enableProdMode();
}

//this is because we did not use in the container at type script


const mount = (currentTheme: Theme) => {
  platformBrowserDynamic([{provide: Theme, useValue: currentTheme}])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export {mount}
