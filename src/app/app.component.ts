import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

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
  endTime = this.getFourThirtyToday();

  ngOnInit() {
    this.intervalId = setInterval(() => {
      if (new Date().getHours() > 7) {
        if (new Date().getHours() == 8 && new Date().getMinutes() < 30) {
          this.percentage = 0
          this.time = 0
        } else {
          var currentTime = Date.now();
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

  getFourThirtyToday(): number {
    var currentDay = new Date().getDate()
    var currentMonth = new Date().getMonth() + 1
    var currentYear = new Date().getFullYear()
    var date = Date.parse('' + currentMonth + '/' + currentDay + '/' + currentYear)
    date = date + this.getHour(16.5)
    return date;
  }

  getPercentage(): number {
    var fullShift = this.getHour(8) // 28800000ms
    var alteredTime = this.time + this.getHour()
    return (fullShift - alteredTime) / fullShift * 100;
  }

  getHour(multiple = 1): number {
    return 60*60*1000*multiple
  }
}
