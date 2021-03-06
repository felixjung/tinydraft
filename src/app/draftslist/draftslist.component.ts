import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DraftsService } from '../service/drafts.service';

@Component({
  selector: 'app-draftslist',
  templateUrl: './draftslist.component.html',
  styleUrls: ['./draftslist.component.css'],
})
export class DraftslistComponent implements OnInit {
  drafts;

  constructor(
    private route: ActivatedRoute,
    private draftsService: DraftsService,
  ) { }

  ngOnInit() {
    this.drafts = this.route.snapshot.data['drafts'];
  }

  deleteDraft(id) {
    this.draftsService.deleteDraft(id).subscribe(drafts => this.drafts = drafts);
  }
}
