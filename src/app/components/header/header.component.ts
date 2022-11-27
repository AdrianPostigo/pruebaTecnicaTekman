import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle: boolean = false;
  optionsInfo: [] | any = [];
  constructor(private studentService: StudentService) { }

  async ngOnInit(): Promise <void> {
    this.optionsInfo = await this.studentService.getOptionsInfo();
    console.log('info', this.optionsInfo)
  }

  show(){
    this.toggle = true;
  }

  hide(){
    this.toggle = false;
  }

  getDataForm(pForm: any){
    console.log(pForm.value)
    this.hide();
  }
}
