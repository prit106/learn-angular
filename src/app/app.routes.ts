import { Routes } from '@angular/router';
import { LandingPage } from './Pages/landing-page/landing-page';
import { Home } from './Pages/home/home';
import { App } from './app';
import { About } from './about/about';

export const routes: Routes = [
    // { path : "/", component : App},
    { path : "landing-page", component : LandingPage},
    { path : "home", component : Home},
    { path : "about", component : About}
];
