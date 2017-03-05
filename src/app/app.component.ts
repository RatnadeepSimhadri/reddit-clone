import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor(){
    this.articles = [new Article(
      'Angular 2', 'http://angular.io', 10),
      new Article(
        'Full Stack', 'http://fullstack.io', 4),
      new Article(
        'Angular Homepage', 'http://angular.io', 1)
    ];
  }
  addArticle(title: HTMLInputElement , link: HTMLInputElement): boolean{
    this.articles.push(new Article(title.value,link.value,0));
    console.log(`Adding Article title: ${title.value} and Link: ${link.value}`)
    title.value="";
    link.value="";
    return false;
  }
}
