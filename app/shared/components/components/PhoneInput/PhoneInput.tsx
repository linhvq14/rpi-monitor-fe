'use client';

import { ComboboxItem, rem, Select, TextInput, TextInputProps } from '@mantine/core';
import { useState } from 'react';
import _ from 'lodash';
import { fetchInternationalDialingCodes } from '../../apis/master-data';
import { LIST_PHONES } from './list-phones';

interface PhoneInputProps extends TextInputProps {
  selectValue: string;
  onSelectChange: (value: string | null, option: ComboboxItem) => void;
}

export const PhoneInput = ({ selectValue, onSelectChange, ...props }: PhoneInputProps) => {
  const [dialingCodes, setDialingCodes] = useState<{ label: string; value: string }[]>(LIST_PHONES);
  const [loaded, setLoaded] = useState(false);

  const init = async () => {
    const response = await fetchInternationalDialingCodes({
      pageSize: 1000,
    });

    if (response.data?.internationalDialingCodes?.length) {
      setLoaded(true);

      setDialingCodes(
        response.data?.internationalDialingCodes?.map((item) => ({
          label: _.get(item, 'dialingCode.0', ''),
          value: item?.countryCode || '',
        })) || []
      );
    }
  };

  const onFocus = () => {
    if (!loaded) {
      init();
    }
  };

  const handleOnSelectChange = (value: string | null, option: ComboboxItem) => {
    onSelectChange && onSelectChange((option as any)?.originalValue || value, option);
  };

  const select = (
    <Select
      data={dialingCodes}
      styles={{
        root: {
          height: '100%',
          overflow: 'hidden',
        },
        input: {
          width: rem('74px'),
          padding: rem('8px'),
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 6,
          borderTop: 0,
          borderLeft: 0,
          borderBottom: 0,
        },
      }}
      searchable
      allowDeselect={false}
      clearable={false}
      withCheckIcon={false}
      rightSectionWidth={rem('110px')}
      value={selectValue}
      onFocus={onFocus}
      onChange={handleOnSelectChange}
    />
  );

  return (
    <TextInput
      {...props}
      leftSection={select}
      leftSectionWidth={74}
      leftSectionProps={{ style: { alignSelf: 'center', height: '95%' } }}
      styles={{ input: { paddingLeft: rem('85px') } }}
    />
  );
};
