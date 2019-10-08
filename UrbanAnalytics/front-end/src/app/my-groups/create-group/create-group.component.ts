import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  @Output() exit: EventEmitter<{}> = new EventEmitter();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.Allmembers.forEach((user, index) => {
      this.dropdownList.push({
        item_id: index, item_text: user.email
      });
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  exitPopup = (event) => {
    console.log(event.target.className);

    if (event.target.className === "cont" || event.target.className === "cancelButton button") {
      this.exit.emit();
    }
  }
}
