import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: Object;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.page = this.contentService.pages['home'];
  }

}
