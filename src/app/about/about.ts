import { Component , AfterViewInit} from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [NavBar,Footer],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements AfterViewInit {

ngAfterViewInit(): void {
const sections = document.querySelectorAll('.sec1, .sec2 > div, .sec3, .sec4');
    
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible-scroll');
      observer.unobserve(entry.target); // يظهر مرة واحدة فقط
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

}
constructor(private title: Title, private meta: Meta) {
  this.title.setTitle('عن ميكادو | من نحن');

  this.meta.addTags([
    { name: 'description', content: 'تعرف على شركة ميكادو للمعدات وخبرتنا في مجال المولدات والمعدات الصناعية.' },
    { name: 'keywords', content: 'عن ميكادو, شركة معدات, مولدات, معدات إنشائية' }
  ]);
}

}