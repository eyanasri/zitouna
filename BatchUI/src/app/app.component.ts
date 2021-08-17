import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {JobService} from './job/job.service';
import {JobComponent} from './job/job.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  jobListSubs: Subscription;
  jobList: JobComponent[];

  constructor(private jobApi: JobService) {
  }

  ngOnInit() {
    this.jobListSubs = this.jobApi
      .getJobs()
      .subscribe(res => {
          this.jobList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.jobListSubs.unsubscribe();
  }
}

