export const ROUTE_ROOT = '/';
export const ROUTE_AUTH_ROOT = '/auth';
export const ROUTE_DASHBOARD_ROOT = '/dashboard';
export const ROUTE_SETTING_ROOT = '/settings';
export const ROUTE_SEARCH_ROOT = '/search';
export const ROUTE_LINK_ROOT = '/links';
export const ROUTE_FILE_ROOT = '/files';

const supportUrl =
  import.meta.env.VITE_SUPPORT_URL || 'myapp';

export const SHARED_ROUTES = {
  root: ROUTE_ROOT,

  // ******auth*******
  auth: ROUTE_AUTH_ROOT,

  // ******misc*******
  dashboard: ROUTE_DASHBOARD_ROOT,
  academyCenter: 'academy-center',
  support: supportUrl,

  // ******search*******
  search: ROUTE_SEARCH_ROOT,

  // ******setting*******
  settings: ROUTE_SETTING_ROOT,
  userProfile: `${ROUTE_SETTING_ROOT}/user-profile`,
  teamManagement: `${ROUTE_SETTING_ROOT}/team-management`,
  inviteMember: `${ROUTE_SETTING_ROOT}/team-management/invite`,
  billing: `${ROUTE_SETTING_ROOT}/billing`,
  priceAndPlan: `${ROUTE_SETTING_ROOT}/price-and-plan`,
  billingStatusCancel: `${ROUTE_SETTING_ROOT}/billing-cancel`,
  billingStatusSuccess: `${ROUTE_SETTING_ROOT}/billing-success`,

  // ******links*******
  link: `${ROUTE_LINK_ROOT}/:id`,
  file: `${ROUTE_FILE_ROOT}/:id`,

  // ******redirect pages*******
  workspaceDeleted: `/workspace-deleted`,
};
