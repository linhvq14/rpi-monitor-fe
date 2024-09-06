import { rem, Text, TextInput, TextInputProps } from '@mantine/core';
import { useState } from 'react';

export const ValidateTextInput = ({
  onCheck,
  onChange,
  onBlur,
  ...props
}: TextInputProps & { onCheck?: () => void }) => {
  const [lock, setLock] = useState(false);

  return (
    <TextInput
      {...props}
      styles={{
        input: {
          paddingRight: rem('85px'),
        },
        section: { width: rem('69px') },
      }}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
          setLock(false);
        }
      }}
      onBlur={(e) => {
        if (onBlur) {
          onBlur(e);
        }
      }}
      rightSection={
        <Text
          w={rem('69px')}
          fz={rem('13px')}
          lh={rem('16px')}
          fw={500}
          c={lock ? 'gray.5' : 'info.7'}
          style={{ cursor: lock ? 'not-allowed' : 'pointer' }}
          onClick={() => {
            if (lock) return;

            if (onCheck) {
              onCheck();
              setLock(true);
            }
          }}
        >
          Kiểm tra
        </Text>
      }
    />
  );
};
