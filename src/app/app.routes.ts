import { LoginComponent } from './login/login.component';
import { DraftslistComponent } from './draftslist/draftslist.component';
import { DraftComponent } from './draft/draft.component';
import { EditorComponent } from './editor/editor.component';
import { DraftDetailComponent } from './draft-detail/draft-detail.component';
import {
  DraftResolve,
  FavedDraftsResolve,
  EmptyDraftResolve,
  DraftsListResolve,
} from './services/drafts.resolve';
import { AuthGuardService } from './services/auth-guard.service';

export const tinydraftRoutes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'drafts',
    component: DraftslistComponent,
    canActivate: [AuthGuardService],
    resolve: {
      drafts: DraftsListResolve
    }
  },
  {
    path: 'faved',
    component: DraftslistComponent,
    canActivate: [AuthGuardService],
    resolve: {
      drafts: FavedDraftsResolve
    }
  },
  {
    path: 'drafts/:id',
    component: DraftDetailComponent,
    canActivate: [AuthGuardService],
    resolve: {
      draft: DraftResolve,
    }
  },
  {
    path: 'drafts/:id/edit',
    component: EditorComponent,
    canActivate: [AuthGuardService],
    resolve: {
      draft: DraftResolve,
    }
  },
  {
    path: 'new',
    component: EditorComponent,
    canActivate: [AuthGuardService],
    resolve: {
      draft: EmptyDraftResolve
    }
  }
];
