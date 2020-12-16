import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmailsService} from '../../../services/emails.service';
import {Tag} from '../../../interfaces/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Output()
  tagSelected: EventEmitter<Tag>;

  constructor(private emailService: EmailsService) {
    this.tagSelected = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  getTagsConfig(): Array<Tag> {
    return this.emailService.getTags();
  }

  handleClick(tag): void {
    this.tagSelected.emit(tag);
  }

}
