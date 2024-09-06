'use client';

import { ComboboxItem, Flex, rem, Select, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useDebouncedCallback, useDidUpdate, useInputState } from '@mantine/hooks';
import { SearchIcon } from '../icons';
import styles from './SearchInput.module.css';

export type SearchInputSelection = {
  label: string;
  value: string;
  placeholder?: string;
};

export type SearchInputValue = {
  keyLabel?: string;
  keyValue?: string;
  value: string;
};

interface SearchInputProps {
  selection?: SearchInputSelection[];
  placeholder?: string;
  defaultKey?: string;
  defaultValue?: string;
  onSearch?: ({ keyLabel, keyValue, value }: SearchInputValue) => void;
  debounceSearchTime?: number;
  h?: string | number;
}

export const SearchInput = ({
  selection,
  onSearch,
  debounceSearchTime,
  placeholder,
  h,
}: SearchInputProps) => {
  const withSelection = Array.isArray(selection) && selection.length > 0;

  const [searchKey, setSearchKey] = useState<ComboboxItem | null>(
    withSelection ? selection[0] : null
  );
  const [searchValue, setSearchValue] = useInputState<string>('');

  const handleSearch = useDebouncedCallback(() => {
    if (onSearch) {
      onSearch({
        keyLabel: searchKey?.label,
        keyValue: searchKey?.value,
        value: searchValue,
      });
    }
  }, debounceSearchTime || 300);

  useDidUpdate(() => {
    handleSearch();
  }, [searchKey, searchValue]);

  return (
    <Flex
      gap={0}
      styles={{
        root: {
          '--search-input-height': h || rem('44px'),
        },
      }}
    >
      {withSelection ? (
        <Select
          clearable={false}
          allowDeselect={false}
          data={selection}
          classNames={{
            input: styles.selectInput,
          }}
          value={searchKey ? searchKey.value : null}
          onChange={(_value, option) => setSearchKey(option)}
        />
      ) : null}
      <TextInput
        flex={1}
        classNames={{
          input: styles.input,
        }}
        styles={{
          input: {
            borderTopLeftRadius: withSelection ? 0 : rem('4px'),
            borderBottomLeftRadius: withSelection ? 0 : rem('4px'),
            borderLeft: '1px solid var(--mantine-color-gray-scale-3)',
          },
        }}
        leftSectionPointerEvents="none"
        leftSection={<SearchIcon fill="var(--mantine-color-gray-scale-5)" />}
        placeholder={
          selection?.find((item) => item.value === searchKey?.value)?.placeholder ||
          placeholder ||
          ''
        }
        value={searchValue}
        onChange={setSearchValue}
      />
    </Flex>
  );
};
