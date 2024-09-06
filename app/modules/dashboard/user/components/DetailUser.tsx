// 'use client';

// import React from 'react';
// import { useDisclosure } from '@mantine/hooks';
// import { ContentLayout } from '@shared/layouts/ContentLayout';
// import { Avatar, Badge, Button, Card, Flex, Grid, rem, Stack, Text, Title } from '@mantine/core';
// import { User } from '@/src/grpc/@types/core/identity/v1/resources/user';
// import { FormModalUser } from './FormModalUser';
// import { USER_ROUTE, USER_STATUS } from '@/src/shared/constants/identity/user';
// import { CampaignFillIcon, KeyFillIcon, PencilIcon } from '@/src/shared/components/icons';
// import { UserStatus } from '@/src/grpc/@types/core/identity/v1/enums/user_status';

// export const DetailUser = ({ user, onRefetchUser }: { user: User; onRefetchUser?: () => void }) => {
//   const [opened, { open, close }] = useDisclosure(false);
//   const status = user.status ? USER_STATUS[user.status] : USER_STATUS[0];

//   return (
//     <>
//       <ContentLayout
//         size={780}
//         title={user?.fullName || 'Chi tiết tài khoản'}
//         backLink={{
//           label: 'User management',
//           link: USER_ROUTE.LIST,
//         }}
//       >
//         <Card shadow="sm" radius="md" p={rem('20px')} mt={rem('24px')} mb={rem('20px')}>
//           <Flex gap={rem('16px')} justify="space-between">
//             <Title
//               fz={rem('20px')}
//               fw={600}
//               lh={rem('28px')}
//               pb={rem('20px')}
//               size={rem('20px')}
//               c="primary"
//             >
//               Thông tin hiển thị
//             </Title>

//             <Button
//               h={rem('36px')}
//               leftSection={<PencilIcon fill="var(--mantine-color-gray-scale-9)" />}
//               color="#eae9e6"
//               onClick={open}
//             >
//               Chỉnh sửa
//             </Button>
//           </Flex>

//           <Grid gutter={rem('20px')}>
//             <Grid.Col span={{ base: 12, md: 'content' }}>
//               <Avatar
//                 src={
//                   user?.avatarImageId
//                     ? `${process.env.NEXT_PUBLIC_CDN_URL}/${user?.avatarImageId}`
//                     : undefined
//                 }
//                 name={user?.fullName || ''}
//                 bg="white"
//                 w={rem('120px')}
//                 h={rem('120px')}
//                 radius={rem('4px')}
//                 style={{ border: '1px solid var(--mantine-color-gray-scale-1)' }}
//               />
//             </Grid.Col>

//             <Grid.Col span={{ base: 12, md: 'auto' }}>
//               <Grid>
//                 <Grid.Col span={12}>
//                   <Text fw={500} fz={rem('13px')} c="gray-scale.5">
//                     Tên tài khoản
//                   </Text>
//                   <Text fz={rem('15px')} lineClamp={1} mt={rem('8px')}>
//                     {user?.fullName || '-'}
//                   </Text>
//                 </Grid.Col>

//                 <Grid.Col span={12}>
//                   <Text fw={500} fz={rem('13px')} c="gray-scale.5">
//                     Chức danh
//                   </Text>
//                   <Text fz={rem('15px')} lineClamp={1} mt={rem('8px')}>
//                     -
//                   </Text>
//                 </Grid.Col>
//               </Grid>
//             </Grid.Col>
//           </Grid>
//         </Card>

//         <Card shadow="sm" radius="md" p={rem('20px')} mt={rem('24px')} mb={rem('20px')}>
//           <Title
//             fz={rem('20px')}
//             fw={600}
//             lh={rem('28px')}
//             pb={rem('20px')}
//             size={rem('20px')}
//             c="primary"
//           >
//             Tài khoản
//           </Title>

//           <Stack gap={rem('20px')}>
//             <Grid align="center">
//               <Grid.Col span={6}>
//                 <Text fw={500} fz={rem('13px')} c="gray-scale.5">
//                   Trạng thái
//                 </Text>

//                 <Flex align="center" gap={rem('8px')} mt={rem('8px')}>
//                   <Badge variant="light" bg={status.bg} c={status.c}>
//                     {status?.label}
//                   </Badge>
//                   <Text fz={rem('13px')} lineClamp={1} c="gray-scale.5">
//                     từ 09:00 16/04/2024
//                   </Text>
//                 </Flex>
//               </Grid.Col>

//               <Grid.Col span={6} style={{ justifyContent: 'flex-end', display: 'flex' }}>
//                 {user?.status === UserStatus.USER_STATUS_ACTIVE ? (
//                   <Button h={rem('36px')} color="#eae9e6">
//                     Vô hiệu hóa
//                   </Button>
//                 ) : (
//                   <Button h={rem('36px')}>Kích hoạt lại</Button>
//                 )}
//               </Grid.Col>
//             </Grid>

//             <Grid align="center">
//               <Grid.Col span={6}>
//                 <Text fw={500} fz={rem('13px')} c="gray-scale.5">
//                   Email
//                 </Text>

//                 <Text fz={rem('15px')} lineClamp={1} mt={rem('8px')}>
//                   {user?.email || '-'}
//                 </Text>
//               </Grid.Col>

//               <Grid.Col span={6} style={{ justifyContent: 'flex-end', display: 'flex' }}>
//                 <Button
//                   h={rem('36px')}
//                   leftSection={<CampaignFillIcon fill="var(--mantine-color-gray-scale-9)" />}
//                   color="#eae9e6"
//                 >
//                   Gửi email kích hoạt
//                 </Button>
//               </Grid.Col>
//             </Grid>

//             <Grid align="center">
//               <Grid.Col span={6}>
//                 <Text fw={500} fz={rem('13px')} c="gray-scale.5">
//                   Mật khẩu
//                 </Text>

//                 <Text fz={rem('15px')} lineClamp={1} mt={rem('8px')}>
//                   Thay đổi lần cuối 12:02 16/04/2024
//                 </Text>
//               </Grid.Col>

//               <Grid.Col span={6} style={{ justifyContent: 'flex-end', display: 'flex' }}>
//                 <Button
//                   h={rem('36px')}
//                   leftSection={<KeyFillIcon fill="var(--mantine-color-gray-scale-9)" />}
//                   color="#eae9e6"
//                 >
//                   Đổi mật khẩu
//                 </Button>
//               </Grid.Col>
//             </Grid>
//           </Stack>
//         </Card>
//       </ContentLayout>

//       {opened && (
//         <FormModalUser opened={opened} onClose={close} user={user} onRefetchUser={onRefetchUser} />
//       )}
//     </>
//   );
// };
