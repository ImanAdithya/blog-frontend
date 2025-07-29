import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/model/blogModel';
import { BlogService } from 'src/app/service/blog.service';  // Adjust path as needed

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  userId: number | null = null;
  blogs: BlogModel[] = []; 

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    const storedUserId = localStorage.getItem("userId");
    this.userId = storedUserId ? +storedUserId : null;

    if (this.userId !== null) {
      this.getBlogsByUserId(this.userId);
    } else {
      console.warn("No userId found in localStorage");
    }
  }

  getBlogsByUserId(userId: number): void {
    this.blogService.getBlogByUserId(userId).subscribe({
      next: (response) => {
        this.blogs = response.data || response; 
      },
      error: (err) => {
        alert("Failed to fetch blogs");
        console.error("Failed to fetch blogs", err);
      }
    });
  }
}
