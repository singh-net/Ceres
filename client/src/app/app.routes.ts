import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Payments } from './payments/payments/payments';
import { TestErrors } from './errors/test-errors/test-errors';
import { NotFound } from './errors/not-found/not-found';
import { ServerError } from './errors/server-error/server-error';
import { PaymentAdd } from './payments/payment-add/payment-add';

export const routes: Routes = [

    { path: '', component: Dashboard },
    { path: 'payments',  runGuardsAndResolvers: 'always', component: Payments },
    { path: 'payments/add', component: PaymentAdd },


    { path: 'errors', component: TestErrors },
    { path: 'not-found', component: NotFound },
    { path: 'server-error', component: ServerError },
    { path: '**', component: Dashboard, pathMatch: 'full' },



];
