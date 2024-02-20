import {
  INVOICE_ROOT_ENDPOINT,
  PAYMENT_METHOD_ROOT_ENDPOINT,
  SUBSCRIPTION_ROOT_ENDPOINT,
  SUBSCRIPTION_ROOT_ENDPOINT_WITH_ID,
} from '../constants/endpoints';
import { useWorkspace } from '../context';

const ENDPOINTS = {
  subscription: SUBSCRIPTION_ROOT_ENDPOINT,
  subscriptionWithId: SUBSCRIPTION_ROOT_ENDPOINT_WITH_ID,
  paymentMethod: PAYMENT_METHOD_ROOT_ENDPOINT,
  invoice: INVOICE_ROOT_ENDPOINT,
};

export function useCustomerEndpoint(key: keyof typeof ENDPOINTS) {
  const wid = useWorkspace()?.id;

  return ENDPOINTS[key].replace(':customerId', String(wid));
}
