import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  posts: Post[];

  @Output()
  voted = new EventEmitter<number>();
  @Output()
  unvoted = new EventEmitter<number>();

  vote(like: number) {
    this.voted.emit(like);
  }

  unvote(dislike: number) {
    this.unvoted.emit(dislike);
  }

}
