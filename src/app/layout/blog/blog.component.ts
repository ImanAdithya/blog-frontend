import { Component, OnInit } from '@angular/core';
import { BlogModelCreate } from 'src/app/model/BlogModelCreate';
import { BlogService } from 'src/app/service/blog.service';

declare var bootstrap: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  blogs: BlogModelCreate[] = [];
  formModel: BlogModelCreate = {
    id: 0,
    title: '',
    description: '',
    userId: 0,
  };
  isEdit = false;
  modalRef: any;
  userId: number = 0;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    const storedId = localStorage.getItem('userId');
    this.userId = storedId ? +storedId : 0;
    if (this.userId) this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogByUserId(this.userId).subscribe((res) => {
      this.blogs = res.data || res;
    });
  }

  openCreateForm() {
    this.isEdit = false;
    this.formModel = { id: 0, title: '', description: '', userId: this.userId };
    this.showModal();
  }

  editBlog(blog: BlogModelCreate) {
    this.isEdit = true;
    this.formModel = { ...blog };
    this.showModal();
  }

  deleteBlog(id: number) {
    if (confirm('Are you sure to delete this blog?')) {
      this.blogService.deleteBlog(id).subscribe(() => this.getBlogs());
      alert("Delete Success Blog....");
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.blogService.updateBlog(this.formModel, this.formModel.id!).subscribe(() => this.getBlogs());
      alert("Succuss Update Blog....");
    } else {
      this.blogService.createBlog(this.formModel).subscribe(() => this.getBlogs());
      alert("Blog Create Succuss....");
    }
    this.closeModal();
  }

  cancelForm() {
    this.closeModal();
    this.formModel = { id: 0, title: '', description: '', userId: this.userId };
  }

  showModal() {
    const el = document.getElementById('blogModal');
    if (el) {
      this.modalRef = new bootstrap.Modal(el);
      this.modalRef.show();
    }
  }

  closeModal() {
    this.modalRef?.hide();
  }
}
