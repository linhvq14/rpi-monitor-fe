'use client';

import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Menu,
  rem,
  Select,
  Text,
} from '@mantine/core';
import { useMemo, useState } from 'react';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useDisclosure } from '@mantine/hooks';
import { USER_ROUTE, USER_STATUS } from '../../../../shared/constants/dashboard/user';
import { DataTable } from '../../../../shared/components/components/DataTable';
import { SearchInput, SearchInputValue } from '../../../../shared/components/components/SearchInput';
import { MoreActionIcon } from '../../../../shared/components/components/icons';
import { ListUsersRequestFieldFilter, User } from '../../../../shared/apis/dashboard/user';
import { fetchListUsers } from '../../../../services/userService';
import { notifications } from '@mantine/notifications';

// Step 1: Create Dummy Data
const mockUsers = [
  {
    id: '1',
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    status: 1,
    avatarImageId: undefined,
    updatedAt: '2024-09-06T12:00:00Z',
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    email: 'janesmith@example.com',
    status: 2,
    avatarImageId: undefined,
    updatedAt: '2024-09-05T10:00:00Z',
  },
  {
    id: '3',
    fullName: 'Emily Johnson',
    email: 'emilyjohnson@example.com',
    status: 1,
    avatarImageId: undefined,
    updatedAt: '2024-09-04T09:00:00Z',
  },
];

export const ListUsersTable = () => {
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        header: 'Username',
        id: 'name',
        style: { width: '35%' },
        cell: ({ row }) => (
          <Flex gap={rem('12px')} style={{ cursor: 'pointer' }}>
            <Anchor href={USER_ROUTE.DETAIL(row?.original?.id || '')}>
              <Avatar
                size={44}
                src={
                  row?.original?.avatarImageId
                    ? `${process.env.NEXT_PUBLIC_CDN_URL}/${row?.original?.avatarImageId}`
                    : undefined
                }
                name={row?.original?.fullName || ''}
                radius={40}
                style={{
                  border: '1px solid var(--mantine-color-gray-scale-2)',
                }}
              />
            </Anchor>

            <Box>
              <Anchor href={USER_ROUTE.DETAIL(row?.original?.id || '')}>
                <Text
                  fz={rem('15px')}
                  fw={500}
                  lh={rem('24px')}
                  c="gray-scale.10"
                  lineClamp={1}
                  style={{ wordBreak: 'break-word' }}
                >
                  {row?.original?.fullName || ''}
                </Text>
              </Anchor>

              <Text fz={rem('13px')} fw={400} lh={rem('16px')} c="gray-scale.5" mt={rem('4px')}>
                -
              </Text>
            </Box>
          </Flex>
        ),
      },
      {
        header: 'Email',
        accessorKey: 'email',
        style: { width: '25%' },
        cell: ({ getValue }) => getValue(),
      },
      {
        header: 'Status',
        accessorKey: 'status',
        style: { width: '20%' },
        cell: ({ row }) => {
          // const status = row.original.status ? USER_STATUS[row.original.status] : USER_STATUS[0];

          // return (
          //   <Badge variant="light" bg={status.bg} c={status.c}>
          //     {status?.label}
          //   </Badge>
          // );
        },
      },
      {
        header: 'Action',
        accessorKey: 'updatedAt',
        id: 'updatedAt',
        style: { width: '20%' },
        cell: ({ row }) => (
          <Button
            h={rem('36px')}
            bg="rgba(109, 109, 109, 0.1)"
            px={rem('12px')}
            component="a"
            href={USER_ROUTE.DETAIL(row?.original?.id || '')}
          >
            View
          </Button>
        ),
      },
      {
        id: 'actions',
        header: '',
        cell: ({ row }) => (
          <Menu
            shadow="md"
            width={200}
            position={row?.index !== undefined && row?.index < 2 ? 'bottom-end' : 'top-end'}
            arrowPosition="center"
          >
            <Menu.Target>
              <ActionIcon variant="transparent">
                <MoreActionIcon fill="var(--mantine-color-gray-scale-5)" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item component="a" href={USER_ROUTE.DETAIL(row?.original?.id || '')}>
                Test
              </Menu.Item>
{/* 
              <Menu.Item onClick={() => handleEdit(row.original)}>Chỉnh sửa</Menu.Item>

              <Menu.Item>Đổi mật khẩu</Menu.Item>

              <Menu.Item>Gửi lại email kích hoạt</Menu.Item>

              <Menu.Item>Vô hiệu hóa</Menu.Item>

              <Menu.Item>Kích hoạt</Menu.Item> */}
            </Menu.Dropdown>
          </Menu>
        ),
      },
    ],
    []
  );

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [fields, setFields] = useState<ListUsersRequestFieldFilter>({});

  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
    pageToken: string;
    nextPageToken: string;
    prevPageToken: string;
  }>({
    prevPageToken: '',
    pageToken: '',
    nextPageToken: '',
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection, setRowSelection] = useState({});

  const queries = useMemo(
    () => ({
      pageToken: pagination.pageToken || undefined,
      pageSize: pagination.pageSize,
      search: fields.search || undefined,
      status: fields.status || undefined,
    }),
    [pagination.pageToken, pagination.pageSize, fields.search, fields.status]
  );

  const userQuery = useQuery({
    queryKey: [
      'dashboard:users',
      {
        pageSize: queries.pageSize,
        pageToken: queries.pageToken,
        search: queries.search,
        status: queries.status,
      },
    ],
    queryFn: async () => {
      try {
        const response = await fetchListUsers(queries);

        // setPagination({
        //   ...pagination,
        //   nextPageToken: response.data?.nextPageToken || '',
        //   prevPageToken: response.data?.prevPageToken || '',
        // });
        setRowSelection({});
        return response.users;
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

  const table = useReactTable({
    data: userQuery || [],
    // data: mockUsers,
    columns,
    rowCount: parseInt(userQuery.data?.total || '0', 10),
    // rowCount: mockUsers.length,
    // rowCount: parseInt('0', 10),
    state: {
      pagination,
      rowSelection,
    },
    getRowId: (row) => row.id || '',
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  const resetPagination = () => {
    setPagination({
      ...pagination,
      pageToken: '',
      nextPageToken: '',
      prevPageToken: '',
    });
  };

  const tableGetSelectedRowModel = table.getSelectedRowModel()?.rows || [];

  const handleSearch = async (searchInputValue: SearchInputValue) => {
    const { value } = searchInputValue;

    setFields({
      ...fields,
      search: value,
    });

    resetPagination();
  };

  const handleEdit = (user: User) => {
    open();
    setSelectedUser(user);
  };

  return (
    <>
      <Grid p={rem('12px')} gutter={rem('12px')}>
        {/* <Grid.Col span={{ base: 12, md: 12, lg: 9.5 }}> */}
          {/* <SearchInput
            selection={[
              {
                label: 'Tên tài khoản',
                value: 'search',
                placeholder: 'Tìm theo tên tài khoản',
              },
              {
                label: 'Email',
                value: 'email',
                placeholder: 'Tìm theo email',
              },
            ]}
            placeholder="Tìm theo tên tài khoản"
            onSearch={handleSearch}
            debounceSearchTime={800}
          /> */}
        {/* </Grid.Col> */}

        {/* <Grid.Col span={{ base: 12, md: 12, lg: 2.5 }}> */}
          {/* <Select
            clearable
            placeholder="Status"
            data={[
              {
                label: USER_STATUS[1].label,
                value: '1',
              },
              {
                label: USER_STATUS[2].label,
                value: '2',
              },
            ]}
            onChange={(value) => {
              setFields({
                ...fields,
                status: [Number(value)],
              });
              resetPagination();
            }}
          /> */}
        {/* </Grid.Col> */}
      </Grid>

      <Box px={rem('8px')}>
        <DataTable<User>
          loading={userQuery.isFetching || userQuery.isLoading}
          // total={parseInt(userQuery.data?.total || '0', 10)}
          total={parseInt('0', 10)}
          table={table}
          // selectionActions={
          //   <Group gap={rem('12px')}>
          //     <Button h={rem('36px')} bg="gray-scale.1">
          //       Gửi lại email kích hoạt
          //     </Button>

          //     <Button h={rem('36px')} bg="gray-scale.1">
          //       Kích hoạt lại
          //     </Button>

          //     <Button h={rem('36px')} c="error.5" bg="gray-scale.1">
          //       Vô hiệu hóa
          //     </Button>
          //   </Group>
          // }
        />
      </Box>

      {/* {opened && (
        <FormModalUser
          opened={opened}
          onClose={close}
          user={selectedUser}
          onRefetchUser={() => userQuery.refetch()}
        />
      )} */}
    </>
  );
};
