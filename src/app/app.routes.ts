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
} from './service/drafts.resolve';

export const tinydraftRoutes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'drafts',
    component: DraftslistComponent,
    resolve: {
      drafts: DraftsListResolve
    }
  },
  {
    path: 'faved',
    component: DraftslistComponent,
    resolve: {
      drafts: FavedDraftsResolve
    }
  },
  {
    path: 'drafts/:id',
    component: DraftDetailComponent,
    resolve: {
      draft: DraftResolve,
    }
  },
  {
    path: 'drafts/:id/edit',
    component: EditorComponent,
    resolve: {
      draft: DraftResolve,
    }
  },
  {
    path: 'new',
    component: EditorComponent,
    resolve: {
      draft: EmptyDraftResolve
    }
  }
];
