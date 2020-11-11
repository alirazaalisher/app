import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
3;

import { HomeComponent } from './';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'home.title'
  },
  canActivate: [UserRouteAccessService]
};
