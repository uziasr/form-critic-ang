import { Component, OnInit } from '@angular/core';
import { Case } from '../../models/Case';
import { CasesService } from '../../services/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.less']
})
export class CasesComponent implements OnInit {

  cases: Case[];

  constructor( private casesService: CasesService) { }

  ngOnInit(): void {
    this.casesService.getCases().subscribe(allCases => {
      this.cases = allCases.map(aCase => {
        const caseArr = aCase.video_link.split('=');
        const id = caseArr[1];
        const embeddedLink = caseArr[0].split('watch')[0] + 'embed/' + id;
        console.log(embeddedLink);
        aCase.video_link = embeddedLink;
        return aCase;
    });
      this.cases.pop();
    });
  }
  loggedIn() {
    return localStorage.getItem('authorization') ? true : false;
  }
}
