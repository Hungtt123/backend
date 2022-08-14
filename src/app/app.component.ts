import { Component } from '@angular/core';
import { AuthState } from 'src/states/auth.state';
import {Store} from "@ngrx/store"
import * as AuthActions from 'src/actions/auth.action'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatApp';

  idToken$ = this.store.select((state) => state.auth.idToken);

  constructor(private store: Store<{auth: AuthState}>) {}

  login(){
    this.store.dispatch(AuthActions.login());
  }
}
