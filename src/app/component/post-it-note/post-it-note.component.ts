import { Component, OnInit, Input } from '@angular/core';
import { PostItNote } from 'src/classes/post-it-note';

@Component({
  selector: 'app-post-it-note',
  templateUrl: './post-it-note.component.html',
  styleUrls: ['./post-it-note.component.css']
})
export class PostItNoteComponent implements OnInit {
  //public PostIt: PostItNote = new PostItNote()
  @Input() postIt: PostItNote | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
