'use client';

import {
  ActionIcon,
  Box,
  Checkbox,
  Group,
  LoadingOverlay,
  rem,
  Select,
  Table,
  Text,
} from '@mantine/core';
import { flexRender, Table as ReactTable } from '@tanstack/react-table';
import { ReactNode } from 'react';
import { ArrowDropdownIcon, ChevronLeftIcon, ChevronRightIcon } from '../icons';
import styles from './DataTable.module.css';

interface DataTableProps<T> {
  loading?: boolean;
  total: number;
  table: ReactTable<T>;
  selectionActions?: ReactNode;
  showCheckBoxAction?: boolean;
}

export const DataTable = <T,>({
  loading,
  total,
  table,
  selectionActions,
  showCheckBoxAction = true,
}: DataTableProps<T>) => (
  <Box pos="relative">
    <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />

    <Table highlightOnHover withRowBorders={false} stickyHeader>
      {selectionActions && (table.getIsAllRowsSelected() || table.getIsSomeRowsSelected()) ? (
        <Box
          component="caption"
          pos="absolute"
          top={0}
          right={0}
          h={rem('52px')}
          display="flex"
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10,
            width: 'calc(100% - 62px)',
          }}
        >
          <Text fz={rem('15px')} fw={500} lh={rem('24px')} c="brand.5">
            {`Đã chọn ${Object.keys(table.getState()?.rowSelection).length} bản ghi`}
          </Text>
          <Box>{selectionActions}</Box>
        </Box>
      ) : null}

      <Table.Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Tr key={headerGroup.id}>
            {showCheckBoxAction && (
              <Table.Th w={rem('44px')}>
                <Box
                  w={rem('44px')}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Checkbox
                    {...{
                      checked: table.getIsAllRowsSelected(),
                      indeterminate: table.getIsSomeRowsSelected(),
                      onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                  />
                </Box>
              </Table.Th>
            )}

            {headerGroup.headers.map((header) => (
              <Table.Th
                key={header.id}
                style={{
                  opacity: table.getIsAllRowsSelected() || table.getIsSomeRowsSelected() ? 0 : 1,
                  visibility:
                    table.getIsAllRowsSelected() || table.getIsSomeRowsSelected()
                      ? 'hidden'
                      : 'visible',
                  width: (header.column.columnDef as any)?.style?.width || header.column.getSize(),
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </Table.Th>
            ))}
          </Table.Tr>
        ))}
      </Table.Thead>
      <Table.Tbody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <Table.Tr
              key={row.id}
              bg={row.getIsSelected() ? 'var(--mantine-color-brand-0)' : undefined}
            >
              {showCheckBoxAction && (
                <Table.Td>
                  <Box
                    w={rem('44px')}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Checkbox
                      {...{
                        checked: row.getIsSelected(),
                        disabled: !row.getCanSelect(),
                        indeterminate: row.getIsSomeSelected(),
                        onChange: row.getToggleSelectedHandler(),
                      }}
                    />
                  </Box>
                </Table.Td>
              )}
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))
        ) : loading ? (
          <></>
        ) : (
          <Table.Tr>
            <Table.Td
              colSpan={table.getVisibleLeafColumns()?.length}
              style={{ textAlign: 'center' }}
            >
              <Text fz={rem('15px')} c="gray-scale.5">
                No result!
              </Text>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Tbody>
      <Table.Caption h={rem('60px')} m={0}>
        <Group gap="xs" className={styles.footerWrapper}>
          <Text fz={rem('15px')} lh={rem('24px')}>
            {`Total ${total} result`}
          </Text>
          {!table.getState()?.pagination?.prevPageToken &&
            !table.getState()?.pagination?.nextPageToken ? null : (
            <>
              <ActionIcon
                size={rem('36px')}
                variant="light"
                bg="background.1"
                c="gray-scale.6"
                onClick={() =>
                  table.setPagination({
                    ...table.getState().pagination,
                    pageToken: table.getState()?.pagination?.prevPageToken,
                  })
                }
                disabled={!table.getState()?.pagination?.prevPageToken}
              >
                <ChevronLeftIcon />
              </ActionIcon>
              <ActionIcon
                size={rem('36px')}
                variant="light"
                bg="background.1"
                c="gray-scale.6"
                onClick={() =>
                  table.setPagination({
                    ...table.getState().pagination,
                    pageToken: table.getState()?.pagination?.nextPageToken,
                  })
                }
                disabled={!table.getState()?.pagination?.nextPageToken}
              >
                <ChevronRightIcon />
              </ActionIcon>
            </>
          )}
          <Select
            maw={rem('123px')}
            clearable={false}
            allowDeselect={false}
            rightSectionPointerEvents="none"
            rightSection={<ArrowDropdownIcon />}
            data={[
              { label: '10/ page', value: '10' },
              { label: '20/ page', value: '20' },
              { label: '30/ page', value: '30' },
              { label: '50/ page', value: '50' },
            ]}
            defaultValue="10"
            styles={{
              input: {
                background: 'var(--mantine-color-background-1)',
                border: 'none',
              },
            }}
            value={table.getState().pagination.pageSize.toString()}
            onChange={(value) => {
              table.setPagination({
                ...table.getState().pagination,
                pageToken: '',
                nextPageToken: '',
                prevPageToken: '',
                pageSize: Number(value),
              });
            }}
          />
        </Group>
      </Table.Caption>
    </Table>
  </Box>
);
