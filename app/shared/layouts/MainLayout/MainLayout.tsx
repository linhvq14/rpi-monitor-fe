'use client';

import { AppShell, Box, Burger, Group, Image, LoadingOverlay, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MainNavbar, MenuItem } from './MainNavbar';
import { AppContext } from '../../../providers/AppProvider';
// import { UserSwitch } from './UserSwitch';
// import { AppContext } from '@/src/providers/AppProvider';
// import { fetchLogout } from '../../apis/auth/authentication';
// import { AuthContext } from '@/src/providers/AuthProvider';

interface MainLayoutProps {
  children: ReactNode;
  menu: MenuItem[];
}

export const MainLayout = ({ menu, children }: MainLayoutProps) => {
  const router = useRouter();
  const { appState, setAppLoading } = useContext(AppContext);
//   const { authUser, isLoading: isAuthLoading, fetchAuthUser } = useContext(AuthContext);
  const [opened, { toggle }] = useDisclosure();

//   const handleLogout = async () => {
//     setAppLoading(true);

//     try {
//       await fetchLogout();
//       router.push('/auth/jwt/sign-in');
//     } catch (err) {
//       setAppLoading(false);
//     } finally {
//       setAppLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAuthUser();
//   }, []);

  return (
    <>
      <LoadingOverlay
        pos="fixed"
        overlayProps={{ blur: 2 }}
      />

        <AppShell
          layout="alt"
          header={{ height: { base: 60, sm: 0 } }}
          navbar={{
            width: 236,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header hiddenFrom="sm">
            <Group h="100%" px="md">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            </Group>
          </AppShell.Header>
          <AppShell.Navbar
            style={{
              borderWidth: rem(1),
              '--app-shell-border-color': 'var(--mantine-color-gray-scale-3)',
            }}
            p="sm"
            bg="var(--mantine-color-background-1)"
          >
            <Group mb={rem('20px')} mt={rem('8px')} ml={rem('8px')}>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Link href="/">
                <Image src="/logo.svg" />
              </Link>
            </Group>
            <Box mb={rem('16px')}>
              {/* <UserSwitch user={authUser || {}} onLogout={handleLogout} /> */}
            </Box>
            <MainNavbar menu={menu} />
          </AppShell.Navbar>
          <AppShell.Main
            style={{
              paddingInlineEnd: 'var(--app-shell-aside-offset, 0rem)',
              paddingInlineStart: 'var(--app-shell-navbar-offset, 0rem)',
              paddingBlockEnd: 'var(--app-shell-aside-offset, 0rem)',
              paddingTop: 'var(--app-shell-header-offset, 0rem)',
            }}
          >
            {children}
          </AppShell.Main>
        </AppShell>

    </>
  );
};
