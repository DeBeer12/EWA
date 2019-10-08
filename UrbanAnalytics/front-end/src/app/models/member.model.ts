import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MemberListModelComponent {
  public image: string;
  public name: string;

  constructor(
    image: string,
    name: string
  ) {
    this.image = image;
    this.name = name;
  }
}
