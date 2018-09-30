import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Welcome to Dramatic Designs', subtitle: 'Sustainable Performance | Environmental Impact | Design Innovation', content: 'Dramatic Designs views design as strategy in action, focused on results. We help our clients envision a better future and get there successfully. We help them leverage design’s power to generate innovative solutions that affect real transformation.', image: 'assets/interior1.jpg'},

    'about': {title: 'About Us', subtitle: 'Interior Design | Exterior Design | Brand Design', content: 'For us, design is the means. The starting points are goals, strategies and expectations, but it transcends them to create a new and better reality. Design is transformative.', image: 'assets/interior2.jpg'},

    'work': {title: 'Our Work', subtitle: 'Innovation | Experience | Impact', content: 'Dramatic Designs creates spaces for living and working. Our designers work collaboratively and strategically to deliver innovation, quality and sustainable performance. Our projects are international in scope and range from offices to stores, academic and civic buildings, convention centers, and entertainment and cultural venues.', image: 'assets/interior4.jpg'},

    'contact': {title: 'Contact Us', subtitle: 'New York | Los Angeles | Singapore', content: 'All Inquiries: (888) 555.5555', image: 'assets/interior3.jpg'}
  }
  constructor() { }
}
