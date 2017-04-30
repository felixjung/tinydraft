import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ElasticModule } from 'angular2-elastic';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DraftComponent } from './draft/draft.component';
import { DraftslistComponent } from './draftslist/draftslist.component';
import { DraftActionsComponent } from './draft-actions/draft-actions.component';
import { TitleComponent } from './title/title.component';
import { tinydraftRoutes } from './app.routes';
import { EditorComponent } from './editor/editor.component';
import { DraftsService } from './services/drafts.service';
import {
  DraftResolve,
  FavedDraftsResolve,
  EmptyDraftResolve,
  DraftsListResolve,
} from './services/drafts.resolve';
import { DraftDetailComponent } from './draft-detail/draft-detail.component';
import { firebaseConfig } from './firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    DraftComponent,
    DraftslistComponent,
    DraftActionsComponent,
    TitleComponent,
    EditorComponent,
    DraftDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(tinydraftRoutes),
    FlexLayoutModule,
    ElasticModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    DraftResolve,
    DraftsListResolve,
    EmptyDraftResolve,
    DraftsService,
    FavedDraftsResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
