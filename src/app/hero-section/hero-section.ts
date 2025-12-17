import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.setSEO();
  }

  // ===============================
  //        SEO for Hero Section
  // ===============================
  setSEO() {
    const pageTitle = 'معدات ميكادو | أفضل معدات هندسية ومولدات ومضخات';
    const pageDescription = 'ميكادو توفر مجموعة واسعة من المولدات، المضخات، المعدات الإنشائية والمحركات بجودة عالية وأسعار منافسة.';
    const keywords = 'معدات هندسية, مولدات, مضخات, معدات إنشائية, ميكادو, معدات ثقيلة';

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: '/assets/seo-cover.jpg' });

    // Twitter tags
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDescription });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:image', content: '/assets/seo-cover.jpg' });
  }
  
  // إنشاء نجوم بشكل عشوائي
  stars = Array.from({length: 50}).map(() => ({
    top: Math.random() * 100,     // نسبة من الأعلى
    left: Math.random() * 100,    // نسبة من اليسار
    delay: Math.random() * 5      // تأخير بداية الأنيميشن
  }));
}
