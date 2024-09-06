'use client';

import {
  Accordion,
  Anchor,
  Badge,
  Button,
  Checkbox,
  createTheme,
  Input,
  InputWrapper,
  LoadingOverlay,
  Modal,
  Paper,
  Pill,
  PillGroup,
  PillsInput,
  Radio,
  rem,
  Select,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  Tabs,
  Text,
} from '@mantine/core';
// import { Dropzone } from '@mantine/dropzone';
import { inter, lora } from './font';

import styles from './theme.module.css';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    'gray-scale': [
      '#fbfbfb', // 0
      '#f6f6f6', // 1
      '#e7e7e7', // 2
      '#d1d1d1', // 3
      '#b0b0b0', // 4
      '#808080', // 5
      '#6d6d6d', // 6
      '#5d5d5d', // 7
      '#4f4f4f', // 8
      '#454545', // 9
      '#3d3d3d', // 10
      '#262626', // 11
    ],
    brand: [
      '#fffbeb', // 0
      '#fff4c6', // 1
      '#ffe888', // 2
      '#ffd64a', // 3
      '#ffc320', // 4
      '#f9a107', // 5
      '#dd7902', // 6
      '#b75406', // 7
      '#94400c', // 8
      '#7a360d', // 9
      '#461b02', // 10
    ],
    background: [
      '#fbfbf9', // 0
      '#f8f7f4', // 1
      '#efeee8', // 2
      '#dcdacc', // 3
      '#c5c0ac', // 4
      '#ada48a', // 5
      '#9c9073', // 6
      '#8f8067', // 7
      '#776957', // 8
      '#62574a', // 9
      '#51483d', // 10
      '#2a2520', // 11
    ],
    accent: [
      '#fef1f8', // 0
      '#fee5f2', // 1
      '#ffcbe7', // 2
      '#ffa1d2', // 3
      '#ff75b9', // 4
      '#fa3a93', // 5
      '#ea186f', // 6
      '#cc0a55', // 7
      '#a80c46', // 8
      '#8c0f3d', // 9
      '#560120', // 10
    ],
    error: [
      '#fff1f1', // 0
      '#ffe0e1', // 1
      '#ffc6c8', // 2
      '#ff9ea1', // 3
      '#ff666a', // 4
      '#fd363c', // 5
      '#eb1d23', // 6
      '#c60f14', // 7
      '#a31115', // 8
      '#871518', // 9
      '#4a0507', // 10
    ],
    warning: [
      '#fef6ee', // 0
      '#fdebd7', // 1
      '#fad3ae', // 2
      '#f6b47b', // 3
      '#f18b46', // 4
      '#ef7834', // 5
      '#df5317', // 6
      '#b93d15', // 7
      '#933119', // 8
      '#772c17', // 9
      '#40140a', // 10
    ],
    success: [
      '#f1fcf3', // 0
      '#defae6', // 1
      '#bff3cd', // 2
      '#8ee7a7', // 3
      '#55d379', // 4
      '#2eb956', // 5
      '#209943', // 6
      '#1d7838', // 7
      '#1c5f30', // 8
      '#194e2a', // 9
      '#082b14', // 10
    ],
    info: [
      '#f2f7fd', // 0
      '#e5edf9', // 1
      '#c5dbf2', // 2
      '#92bde7', // 3
      '#579ad9', // 4
      '#2e75b8', // 5
      '#2263a7', // 6
      '#1d4f87', // 7
      '#1b4471', // 8
      '#1c3a5e', // 9
      '#13253e', // 10
    ],
  },
  cursorType: 'pointer',
  primaryColor: 'brand',
  primaryShade: 3,
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: lora.style.fontFamily,
  },
  components: {
    Button: Button.extend({
      classNames: {
        root: styles.buttonRoot,
      },
    }),
    Paper: Paper.extend({
      classNames: {
        root: styles.paperRoot,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        classNames: {
          input: styles.selectInput,
        },
      },
      styles: {
        option: {
          fontSize: rem('15px'),
          lineHeight: rem('24px'),
          fontWeight: 400,
          color: 'var(--mantine-color-gray-scale-10)',
        },
      },
    }),
    Checkbox: Checkbox.extend({
      styles: {
        root: {
          '--checkbox-icon-color': 'var(--mantine-color-gray-scale-9)',
        },
        body: {
          alignItems: 'center',
        },
        input: {
          '--checkbox-color': 'var(--mantine-color-brand-4)',
        },
        label: {
          fontSize: rem('15px'),
          lineHeight: rem('24px'),
          fontWeight: 400,
          color: 'var(--mantine-color-gray-scale-10)',
        },
      },
    }),
    Table: Table.extend({
      styles: {
        table: {
          '--table-highlight-on-hover-color': 'var(--mantine-color-background-1)',
        },
      },
    }),
    TableTbody: TableTbody.extend({
      defaultProps: {
        style: {
          boxShadow: '0px 1px 0px 0px var(--mantine-color-gray-scale-3)',
        },
      },
    }),
    TableTh: TableTh.extend({
      defaultProps: {
        py: rem('4px'),
        px: rem('6px'),
        c: 'var(--mantine-color-gray-scale-5)',
        fz: rem('13px'),
        fw: 500,
        lh: rem('24px'),
        h: rem('52px'),
      },
    }),
    TableTd: TableTd.extend({
      defaultProps: {
        p: rem('6px'),
        h: rem('60px'),
        fw: 400,
        fz: rem('15px'),
        lh: rem('24px'),
        c: 'var(--mantine-color-gray-scale-10)',
      },
    }),
    TableThead: TableThead.extend({
      defaultProps: {
        style: {
          // boxShadow: '0px 1px 0px 0px var(--mantine-color-gray-scale-3)',
          borderBottom: '1px solid var(--mantine-color-gray-scale-3)',
        },
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        fz: rem('15px'),
        fw: 500,
        lh: rem('24px'),
        styles() {
          return {
            root: {
              textTransform: 'capitalize',
            },
          };
        },
      },
    }),
    InputWrapper: InputWrapper.extend({
      styles: {
        label: {
          color: 'var(--mantine-color-gray-scale-5)',
          fontSize: rem('13px'),
          lineHeight: rem('16px'),
          fontWeight: 500,
          marginBottom: rem('8px'),
        },
      },
      classNames: {
        root: styles.inputWrapper,
      },
    }),
    Input: Input.extend({
      classNames: {
        input: styles.input,
      },
    }),
    Radio: Radio.extend({
      styles: {
        label: {
          fontSize: rem('15px'),
          lineHeight: rem('24px'),
          fontWeight: 400,
          color: 'var(--mantine-color-gray-scale-10)',
        },
      },
    }),
    // Dropzone: Dropzone.extend({
    //   classNames: {
    //     root: styles.dropzoneRoot,
    //   },
    // }),
    PillsInput: PillsInput.extend({
      classNames: {
        input: styles.pillInput,
      },
    }),
    PillGroup: PillGroup.extend({
      classNames: {
        group: styles.pillGroup,
      },
    }),
    Pill: Pill.extend({
      classNames: {
        root: styles.pillRoot,
      },
    }),
    Tabs: Tabs.extend({
      classNames: {
        root: styles.tabRoot,
        list: styles.tabList,
        tab: styles.tab,
      },
    }),
    Accordion: Accordion.extend({
      styles: {
        chevron: {
          minWidth: rem(24),
        },
      },
    }),
    Modal: Modal.extend({
      classNames: {
        header: styles.modalHeader,
        title: styles.modalTitle,
        body: styles.modalBody,
      },
      styles: {
        header: {
          fontFamily: lora.style.fontFamily,
        },
        body: {
          fontSize: rem('15px'),
          fontWeight: 400,
        },
      },
    }),
    Drawer: Modal.extend({
      classNames: {
        header: styles.header,
        title: styles.title,
        body: styles.body,
        root: styles.root,
      },
      styles: {
        header: {
          fontFamily: lora.style.fontFamily,
        },
        content: {
          borderRadius: 0,
        },
      },
    }),
    Text: Text.extend({
      styles: {
        root: {
          fontSize: rem('15px'),
        },
      },
    }),
    Anchor: Anchor.extend({
      styles: {
        root: {
          textDecorationLine: 'none',
        },
      },
    }),
    LoadingOverlay: LoadingOverlay.extend({
      styles: {
        root: {
          zIndex: 1000,
        },
      },
    }),
  },
});
