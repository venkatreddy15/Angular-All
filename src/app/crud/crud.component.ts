import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  Posts: any[];

  constructor(private http: HttpClient, private rest: RestService) { }

  ngOnInit() {
    this. getAllPosts();
  }
  getAllPosts() {
    this.rest.get_posts().subscribe(response => {
      this.Posts = response;
      console.log(this.Posts);
    });

  }

}
