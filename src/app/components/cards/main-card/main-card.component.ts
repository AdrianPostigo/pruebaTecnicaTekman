import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  @Input() infoStudent: any;
  currentInfo: any = [];
  currentIdTrimester: number | any;
  randIdTheme: number | any;
  nextIdTheme: number | any;
  currentTrimester: string = "";
  currentIdTheme: number | any;
  currentTheme: string = "";
  arrIdTheme: [] | any = [];
  constructor(private studentService: StudentService) { }

  async ngOnInit(): Promise <void> {
    //console.log('klk',this.infoStudent.trimestersDetails)
    this.currentIdTrimester = this.infoStudent.currentTrimesterId;
    this.currentIdTheme = this.infoStudent.currentThemeId;
    this.nextIdTheme = this.currentIdTheme + 1;
    //console.log('info id', this.currentIdTrimester, this.currentIdTheme)
    this.currentInfo = await this.studentService.getCurrentInfo(this.currentIdTrimester, this.currentIdTheme);
    this.currentTrimester = this.currentInfo.trimesterName;
    this.currentTheme = this.currentInfo.themeName;
    //console.log('indo current', this.currentInfo)
    this.randIdTheme = this.randTheme();
    //console.log(this.randIdTheme)
  }

  randTheme(): number{
    for (let trimester of this.infoStudent.trimestersDetails){
      for ( let theme of trimester.themesDetails){
        if (trimester.trimesterId === this.currentIdTrimester && !theme.isCompleted){
          this.arrIdTheme.push(theme.themeId);
        }
      }
    }
    return this.arrIdTheme[Math.floor(Math.random()*this.arrIdTheme.length)];
  }

}

