import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  idTrimester: number | any;
  idTheme: number | any;
  infoTrimester: any = [];
  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService
  ) { }

  async ngOnInit(): Promise <void> {
    this.activatedRoute.params.subscribe(async (params: any)=> {
      this.idTrimester = params.idtrimester;
      this.idTheme = params.idtheme;
    })
    this.infoTrimester = await this.studentService.getTrimesterInfo(this.idTrimester);
    //console.log('info', this.infoTrimester)
    //console.log('id trimestre', this.idTrimester, 'id theme', this.idTheme)
  }

}
