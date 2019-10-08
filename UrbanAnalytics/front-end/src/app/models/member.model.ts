import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MemberListModelComponent {
  private image: string;
  private name: string;

  constructor(
    image: string,
    name: string
  ) {
    this.image = image;
    this.name = name;
  }
}
