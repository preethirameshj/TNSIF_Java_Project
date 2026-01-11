import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { OrderDetailsModule } from './app/order.service.module';

platformBrowserDynamic()
  .bootstrapModule(OrderDetailsModule)
  .catch((err) => console.error(err));
