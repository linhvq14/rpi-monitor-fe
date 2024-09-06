'use client';

import { Anchor, Box, Container, MantineSize, rem, Title } from '@mantine/core';
import { ReactNode } from 'react';
import Link from 'next/link';
import { useDocumentTitle } from '@mantine/hooks';
import classes from './ContentLayout.module.css';
import { ArrowLeftIcon } from '../../components/components/icons';
// import { ArrowLeftIcon } from '../../components/icons';

interface ContentLayoutProps {
  children: ReactNode;
  fluid?: boolean;
  size?: number | MantineSize;
  title?: string;
  actions?: ReactNode;
  backLink?: {
    label: string;
    link: string;
  };
  noPadding?: boolean;
  hiddenTitle?: boolean;
}

export const ContentLayout = ({
  fluid,
  size,
  title,
  actions,
  backLink,
  noPadding,
  children,
  hiddenTitle,
}: ContentLayoutProps) => {
  let rootStyles = {};

  if (noPadding) {
    rootStyles = {
      paddingLeft: 0,
      paddingRight: 0,
    };
  }

  if (fluid && !noPadding) {
    rootStyles = {
      paddingLeft: rem('36px'),
      paddingRight: rem('36px'),
    };
  }

  try {
    useDocumentTitle(title ?? '');
    // eslint-disable-next-line no-empty
  } catch (error) {}

  return (
    <Container
      fluid={fluid}
      size={size}
      styles={{
        root: rootStyles,
      }}
      className={classes.root}
    >
      {!(!title && !actions && !backLink) ? (
        <Box>
          <Box className={classes.header}>
            <Box>
              {backLink ? (
                <Box className={classes.backLink}>
                  <Anchor
                    underline="never"
                    component={Link}
                    href={backLink.link}
                    fz={rem('13px')}
                    fw={500}
                    lh={rem('16px')}
                    c="gray-scale.5"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <ArrowLeftIcon
                      size={rem('18px')}
                      style={{
                        fill: 'var(--mantine-color-gray-scale-5)',
                        marginLeft: rem('4px'),
                        marginRight: rem('4px'),
                      }}
                    />
                    {backLink.label}
                  </Anchor>
                </Box>
              ) : null}
              {title && !hiddenTitle ? (
                <Title fz={rem('24px')} fw={600} lh={rem('30px')}>
                  {title}
                </Title>
              ) : actions ? (
                <span>&nbsp;</span>
              ) : null}
            </Box>

            {actions ? <Box>{actions}</Box> : null}
          </Box>
        </Box>
      ) : null}

      {children}
    </Container>
  );
};
