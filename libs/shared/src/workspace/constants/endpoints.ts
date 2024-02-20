import { API_BASE_PATH } from '@myapp/shared/constants';

export const WORKSPACE_ROOT_ENDPOINT = `${API_BASE_PATH}/customer-management/um/workspaces`;
export const PLAN_ROOT_ENDPOINT = '/payment-management/gm/plans';
export const CUSTOMER_ROOT_ENDPOINT = '/payment-management/um/customers';
export const SUBSCRIPTION_ROOT_ENDPOINT = `${CUSTOMER_ROOT_ENDPOINT}/:customerId/subscriptions`;
export const SUBSCRIPTION_ROOT_ENDPOINT_WITH_ID = `${CUSTOMER_ROOT_ENDPOINT}/:customerId/subscriptions/:id`;
export const PAYMENT_METHOD_ROOT_ENDPOINT = `${CUSTOMER_ROOT_ENDPOINT}/:customerId/payment-methods`;
export const INVOICE_ROOT_ENDPOINT = `${CUSTOMER_ROOT_ENDPOINT}/:customerId/invoices`;
export const TRANSFER_LINK_ROOT_ENDPOINT = `${API_BASE_PATH}/customer-management/gm/links`;
export const GET_FILE_ROOT_ENDPOINT = `${API_BASE_PATH}/um/workspaces`;
