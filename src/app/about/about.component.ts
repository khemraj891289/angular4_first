import { Component, OnInit, Inject } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {expand} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    expand(),
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMess: string;
  constructor(private leaderservice: LeaderService,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.leaderservice.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
        errmess => this.errMess = <any>errmess);
  }

}
