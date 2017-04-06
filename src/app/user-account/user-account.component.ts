import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//MODELS
import { User } from '../shared/models/user'
//SERVICE
import { FormsService } from '../shared/services/forms-service.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnDestroy {

  private user : User; 	
  private subscription;
  private nameFriend : string;

  constructor(
  	private formsService : FormsService
  	) {

        this.subscription = this.formsService.userLogged
                      		                        .subscribe(
                      		                            (userLog : User) => {
                      		                            	console.log(userLog);
                      		                                this.user = userLog;
                      		                            }
                      		                        );
  }

  private searchFriend () : void {

    this.formsService.searchFriend(this.nameFriend);

  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }


}
