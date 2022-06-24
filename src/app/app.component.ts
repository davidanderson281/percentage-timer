import { formatDate } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'percentage-timer';
  time = Date.now();
  intervalId: string | number | NodeJS.Timeout | undefined;
  percentage = 0;
  startTime!: Date;
  startTimeString = "08:30"
  endTime = 0
  endTimeString = "16:30"
  subtitle = "Complete"


  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.startTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), Number(this.startTimeString.split(':')[0]), Number(this.startTimeString.split(':')[1]))
      if (this.startTime.getHours() > 7) {
        if (this.startTime.getHours() == 8 && this.startTime.getMinutes() < 30) {
          this.percentage = 0
          this.time = 0
        } else {
          var currentTime = Date.now();
          this.endTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), Number(this.endTimeString.split(':')[0]), Number(this.endTimeString.split(':')[1])).getTime()
          var calcTime = this.endTime - currentTime - this.getHour();
          if (calcTime < 0 && calcTime > -(this.getHour())) {
            this.time = (calcTime)
          } else {
            this.time = calcTime
          }
          if (this.getPercentage() > 100) {
            this.percentage = 100
            this.time = 0 - this.getHour()
          } else {
            this.percentage = this.getPercentage()
          }
        }
      } else {
        this.percentage = 0
        this.time = 0
      }

    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getPercentage(): number {
    var timeDifference = this.endTime - this.startTime.getTime()
    var alteredTime = this.time + this.getHour()
    return (timeDifference - alteredTime) / timeDifference * 100;
  }

  getHour(multiple = 1): number {
    return 60 * 60 * 1000 * multiple
  }

  modelChangeFn(e: any) {
    this.subtitle = e
  }

  modelChangeStartTime(e: any) {
    this.startTimeString = e
  }

  modelChangeEndTime(e: any) {
    this.endTimeString = e
  }
}
