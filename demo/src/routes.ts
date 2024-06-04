import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/Home';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/tinymce',
    component: lazy(() => import('./pages/TinyMCE')),
  },
  {
    path: '**',
    component: lazy(() => import('./pages/NotFound')),
  },
];
