import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/model/blogModel';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  blogs: BlogModel[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe({
      next: (res) => {
        this.blogs = res.data;
      },
      error: (err) => {
        console.error('Failed to load blogs:', err);
      }
    });
  }
}
