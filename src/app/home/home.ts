import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { HeroSection } from '../hero-section/hero-section';
import { ProductsSection } from '../products-section/products-section';
import { WhyUsSection } from '../why-us-section/why-us-section';
import { Footer } from '../footer/footer';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSection ,NavBar,ProductsSection,WhyUsSection,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
constructor(private title: Title, private meta: Meta) {
  this.title.setTitle('ميكادو للمعدات | أفضل مولدات ومعدات في مصر');

  this.meta.addTags([
    { name: 'description', content: 'اكتشف أفضل أنواع المولدات، المضخات، المحركات والمعدات الإنشائية لدى ميكادو.' },
    { name: 'keywords', content: 'مولدات, معدات, مضخات, معدات إنشائية, محركات, ميكادو' },
    { property: 'og:title', content: 'ميكادو للمعدات الصناعية' },
    { property: 'og:description', content: 'معدات عالية الجودة بأسعار مميزة' },
    { property: 'og:image', content: '/assets/logo.png' }
  ]);
}

}
