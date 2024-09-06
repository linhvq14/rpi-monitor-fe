'use client';

import { Paper, rem } from '@mantine/core';
// import { ContentLayout } from '@shared/layouts/ContentLayout';
import { ListUsersTable } from '../components/ListUsersTable';
import { ContentLayout } from '../../../../shared/layouts/ContentLayout';

export const ListUsersPage = () => (
  // <ContentLayout fluid title="User management" actions={<ListUsersActions />}>
  <ContentLayout fluid title="User management" >
    <Paper mt={rem('24px')} py="sm" px={rem('8px')}>
      <ListUsersTable />
    </Paper>
  </ContentLayout>
);
