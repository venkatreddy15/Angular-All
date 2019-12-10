import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 post: any;

  constructor(private route: ActivatedRoute, private rest: RestService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    const id = this.route.snapshot.params.id;
    this.rest.getPost(id).subscribe(p => {
     console.log(p);
     this.post = p;
    });
    }

  }


