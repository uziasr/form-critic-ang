import { Component, OnInit } from '@angular/core';
import { CasesService } from 'src/app/services/cases.service';

@Component({
  selector: 'app-case-post',
  templateUrl: './case-post.component.html',
  styleUrls: ['./case-post.component.less']
})
export class CasePostComponent implements OnInit {
  title = '';
  description = '';
  video_link = '';

  constructor(private service: CasesService) { }

  ngOnInit(): void {
  }

  addPost() {
    const newPost = {
      title: this.title,
      description: this.description,
      video_link: this.video_link,
      exercise_id: 1
    };
    console.log('this is the new post', newPost);
    this.service.createPost(newPost).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      }
    });
  }
}
