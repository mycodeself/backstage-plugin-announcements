import { createPermission } from '@backstage/plugin-permission-common';

export const announcementCreatePermission = createPermission({
  name: 'announcement.entity.create',
  attributes: { action: 'create' },
});

export const announcementDeletePermission = createPermission({
  name: 'announcement.entity.delete',
  attributes: { action: 'delete' },
});

export const announcementEntityPermissions = {
  announcementCreatePermission,
  announcementDeletePermission,
};
