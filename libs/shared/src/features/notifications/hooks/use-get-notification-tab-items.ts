import { NotificationItem, NotificationMessageGroup } from '../types';

export function filterNotificationItemsBasedOnType(
  items: NotificationItem[],
  type: NotificationMessageGroup
) {
  return items.filter((x) => x?.message?.group.toUpperCase() === type);
}

export function useGetNotificationTabItems(items: NotificationItem[]) {
  return {
    events: filterNotificationItemsBasedOnType(
      items,
      NotificationMessageGroup.EVENT
    ),
    updates: filterNotificationItemsBasedOnType(
      items,
      NotificationMessageGroup.UPDATE
    ),
  };
}
