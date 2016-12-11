import "./polyfills";
import "./vendor";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './page/app.module';

window.addEventListener("DOMContentLoaded", () => {
	platformBrowserDynamic().bootstrapModule(AppModule);
});
