import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostsComponent } from './add-posts/add-posts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'addPost', component: AddPostsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
