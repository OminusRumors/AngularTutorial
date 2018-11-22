import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user';
import { BottleService } from '../bottle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  private user: User;
  public likes = 0;
  private dislikes = 0;

  constructor(
    private bottleService: BottleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.bottleService.findById(id).subscribe(user => {
      this.user = user;
    })
  }

  delete(): void {
    this.bottleService.delete(this.user).subscribe(victim => {
      console.log(`Deleted user ${victim.id}`);
      console.log(this.user);
      this.router.navigate(['/users']);
    });
  }

  onVoted(like: number) {
    console.log("voted: " + like)
    like > 0 ? this.likes++ : this.dislikes++;
  }

  onUnvoted(dislike: number) {
    dislike > 0 ? this.dislikes++ : this.likes;
  }

}
