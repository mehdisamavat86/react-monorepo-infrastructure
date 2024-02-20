import { NotificationMetadata } from '../../types';

export const formatNotificationText = (
  text: string,
  metadata: Partial<NotificationMetadata>
) => {
  metadata ||= {};
  return text.replace(/{(.*?)}/g, (_, p1) => {
    return `<b>${metadata[p1.trim() as keyof NotificationMetadata]}</b>`;
  });
};
