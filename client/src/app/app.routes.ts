import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Payments } from './payments/payments';
import { PaymentAdd } from './payment-add/payment-add';

export const routes: Routes = [

    { path: '', component: Dashboard },
    { path: 'payments', component: Payments },
    { path: 'payments/add', component: PaymentAdd },



];
