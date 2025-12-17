import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [NavBar,Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
constructor(private title: Title, private meta: Meta) {
  this.title.setTitle('اتصل بنا | ميكادو للمعدات');

  this.meta.addTags([
    { name: 'description', content: 'راسلنا للحصول على أفضل المولدات والمعدات بأسعار لا تقبل المنافسة.' },
    { name: 'keywords', content: 'اتصل بنا, ميكادو, تواصل, مولدات, معدات' }
  ]);
}

}
