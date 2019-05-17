import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold';
  gold = 0;
  activity_log =[];
  date = new Date();
  

  farm() {
    let money = Math.round(Math.random()* 10)+10
    this.gold += money;
    var amPm = "am";

    if (this.date.getHours() >= 12) {
       amPm = "pm";
    }
    
    this.activity_log.unshift({
      "color": "text_green",
      "log": `Earned ${money} gold from the farm. (${this.date.getFullYear()}/${this.date.getMonth()}/${this.date.getDate()} ${this.date.getHours()}:${this.date.getMinutes()} ${amPm})`
    });
  }

  cave() {
    let money = Math.round(Math.random()* 5)+5
    this.gold += money;
    var amPm = "am";

    if (this.date.getHours() >= 12) {
       amPm = "pm";
    }
    
    this.activity_log.unshift({
      "color": "text_green",
      "log": `Earned ${money} gold from the cave. Spooky. (${this.date.getFullYear()}/${this.date.getMonth()}/${this.date.getDate()} ${this.date.getHours()}:${this.date.getMinutes()} ${amPm})`
    });
  }
  house() {
    let money = Math.round(Math.random()* 3)+2
    this.gold += money;
    var amPm = "am";

    if (this.date.getHours() >= 12) {
       amPm = "pm";
    }
    
    this.activity_log.unshift({
      "color": "text_green",
      "log": `Earned ${money} gold from the house. (${this.date.getFullYear()}/${this.date.getMonth()}/${this.date.getDate()} ${this.date.getHours()}:${this.date.getMinutes()} ${amPm})`
    });
  }
  casino() {
    let money = Math.round(Math.random()* 100)-50
    this.gold += money;
    var amPm = "am";

    if (this.date.getHours() >= 12) {
       amPm = "pm";
    }

    if (money > 0 ) {
      this.activity_log.unshift({
        "color": "text_green",
        "log": `Earned ${money} gold from the casino. (${this.date.getFullYear()}/${this.date.getMonth()}/${this.date.getDate()} ${this.date.getHours()}:${this.date.getMinutes()} ${amPm})`
      });
    } else if ( money === 0 ) {
      this.activity_log.unshift({
        "color": "text_green",
        "log": `Went even at the casino. :| (${this.date.getFullYear()}/${this.date.getMonth()}/${this.date.getDate()} ${this.date.getHours()}:${this.date.getMinutes()} ${amPm})`
      });
    } else {
      this.activity_log.unshift({
        "color": "text_red",
        "log": `Lost ${money * -1} gold at the casino. (${this.date.getFullYear()}/${this.date.getMonth()}/${this.date.getDate()} ${this.date.getHours()}:${this.date.getMinutes()} ${amPm})`
      });
    }
  }
}
