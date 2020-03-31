import { Component, OnInit, Input, SecurityContext,  } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Case } from 'src/app/models/Case';


@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.less']
})
export class CaseComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  @Input() aCase: Case;
  ngOnInit(): void {
    const url = this.sanitizer.bypassSecurityTrustUrl(this.aCase.video_link);
  }


  urlCleaner(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
