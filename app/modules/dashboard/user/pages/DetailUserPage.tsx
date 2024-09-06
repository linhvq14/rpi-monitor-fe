'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { Box, Loader } from '@mantine/core';
import { fetchGetUser } from '@/src/shared/apis/identity/user';
import { DetailUser } from '../components/DetailUser';

export const DetailUserPage = ({ id }: { id: string }) => {
  const userQuery = useQuery({
    queryKey: [
      'identity:user:detail',
      {
        id,
      },
    ],
    queryFn: async () => {
      try {
        const response = await fetchGetUser({ id });

        return response.data;
      } catch (err) {
        notifications.show({
          color: 'red',
          message: 'Có lỗi xảy ra',
        });
        return null;
      }
    },
    placeholderData: keepPreviousData,
  });

  if (userQuery.isFetching && userQuery.isLoading && !userQuery.data) {
    return (
      <Box w="100%" pt={200} display="flex" style={{ justifyContent: 'center' }}>
        <Loader color="brand.5" />
      </Box>
    );
  }

  return <DetailUser onRefetchUser={() => userQuery.refetch()} user={userQuery?.data ?? {}} />;
};
