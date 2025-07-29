import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/model/blogModel';
import { BlogModelCreate } from 'src/app/model/BlogModelCreate';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  blogs: BlogModelCreate [] = [];
  filteredBlogs: BlogModelCreate[] = [];
  searchTitle: string = '';
  expandedBlogId: number | undefined | null = null;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe({
      next: (res) => {
        this.blogs = res.data;
        this.filteredBlogs = this.blogs;
      },
      error: (err) => {
        console.error('Failed to load blogs:', err);
      }
    });
  }

 filterBlogs() {
    const search = this.searchTitle.toLowerCase().trim();
    if (!search) {
      this.filteredBlogs = this.blogs;
      return;
    }

    this.filteredBlogs = this.blogs.filter(blog =>
      blog.title.toLowerCase().includes(search)
    );
  }

  toggleReadMore(blogId: number | undefined) {
     this.expandedBlogId = this.expandedBlogId === blogId ? null : blogId;
  }


}
