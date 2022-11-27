import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-summary-card',
  templateUrl: './details-summary-card.component.html',
  styleUrls: ['./details-summary-card.component.css']
})
export class DetailsSummaryCardComponent implements OnInit {

  @Input() infoDetails: any;
  idTheme: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any)=> {
      this.idTheme = params.idtheme;
    })
    console.log('id', this.idTheme)
  }

}
