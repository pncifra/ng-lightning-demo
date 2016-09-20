import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// import { bootstrap }    from '@angular/platform-browser-dynamic';
// import { AppComponent } from './app.component';
// import { provideNglConfig } from 'ng-lightning/ng-lightning';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));
