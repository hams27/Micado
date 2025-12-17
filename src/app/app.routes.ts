import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { NavBar } from './nav-bar/nav-bar';
import { HeroSection } from './hero-section/hero-section';
import { Home } from './home/home';
import { AboutComponent } from './about/about';
import { WhyUsSection } from './why-us-section/why-us-section';
import { Fillter } from './fillter/fillter';

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home',component:Home},
{path:'about',component:AboutComponent},
{path:'contact',component:Contact},
{path:'footer',component:Footer},
{path:'navBar',component:NavBar},
{path:'heroSection',component:HeroSection},
{path:'whyUs',component:WhyUsSection},
{path:'fillter',component:Fillter},
];
