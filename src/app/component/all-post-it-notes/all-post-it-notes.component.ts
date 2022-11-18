import { Component, OnInit } from '@angular/core';
import { PostItNote } from 'src/classes/post-it-note';

@Component({
  selector: 'app-all-post-it-notes',
  templateUrl: './all-post-it-notes.component.html',
  styleUrls: ['./all-post-it-notes.component.css']
})
export class AllPostItNotesComponent implements OnInit {
  AllPostIts: PostItNote[] = [new PostItNote, new PostItNote]

  constructor() { }

  ngOnInit(): void {
  }

}
