import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arrStudent: any = [];
  constructor(private studentService: StudentService) {
  }

  async ngOnInit(): Promise<any> {
    this.arrStudent = await this.studentService.getStudentInfo();
    //console.log('papi',this.arrStudent[0].student.trimestersDetails[0]);
  }

}
