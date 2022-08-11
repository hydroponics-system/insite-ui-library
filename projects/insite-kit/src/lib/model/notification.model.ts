export interface Notification {
  id?: number;
  body?: NotificationBody;
  userId?: number;
  destination?: string;
  action?: NotificationAction;
  created?: string | Date;
}

export interface NotificationBody {
  bodyType: NotificationType;
  [x: string]: any;
}

export enum NotificationType {
  USER = 'USER',
  SYSTEM_UPDATE = 'SYSTEM_UPDATE',
}

export enum NotificationAction {
  CREATE = 'C',
  READ = 'R',
  UPDATE = 'U',
  DELETE = 'D',
}
