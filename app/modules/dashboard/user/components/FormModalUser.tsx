// 'use client';

// import { Group, rem, Modal, Button, TextInput, Grid } from '@mantine/core';
// import styles from '@modules/identity/artist/components/styles/DetailArtistModal.module.css';
// import { useForm } from '@mantine/form';
// import { notifications } from '@mantine/notifications';
// import { UploaderAvatar } from '@shared/components/UploaderAvatar';
// import { useContext } from 'react';
// import { formErrorMessage, isValidEmail } from '@/src/utils';
// import { AppContext } from '@/src/providers/AppProvider';
// import { User } from '@/src/grpc/@types/core/identity/v1/resources/user';
// import {
//   CreateUserRequest,
//   UpdateUserRequest,
// } from '@/src/grpc/@types/core/identity/v1/user_service';
// import { fetchCreateUser, fetchUpdateUser } from '@/src/shared/apis/identity/user';

// export const FormModalUser = ({
//   opened,
//   onClose,
//   user,
//   onRefetchUser,
// }: {
//   opened: boolean;
//   onClose: () => void;
//   user: User | null;
//   onRefetchUser?: () => void;
// }) => {
//   const { setAppLoading } = useContext(AppContext);

//   const form = useForm({
//     validateInputOnBlur: true,
//     initialValues: {
//       id: user?.id || '',
//       fullName: user?.fullName || '',
//       email: user?.email || '',
//       avatarImageId: user?.avatarImageId || '',
//     },
//     validate: {
//       fullName: (value) => (value.length < 1 ? 'Vui lòng không để trống' : null),
//       email: (value: string) =>
//         value.length < 1 ? null : isValidEmail(value) ? null : 'Email không đúng định dạng',
//     },
//   });

//   const handleSubmit = async () => {
//     const userSubmit: CreateUserRequest | UpdateUserRequest = {
//       id: form.values.id ? form.values.id : '',
//       user: {
//         id: form.values.id,
//         fullName: form.values.fullName,
//         email: form.values.email,
//         avatarImageId: form.values.avatarImageId || '',
//       },
//     };

//     try {
//       setAppLoading(true);

//       const response: any = form.values.id
//         ? await fetchUpdateUser(userSubmit)
//         : await fetchCreateUser(userSubmit);

//       setAppLoading(false);

//       if (response?.data?.id) {
//         notifications.show({
//           color: 'green',
//           message: `${form.values.id ? 'Sửa' : 'Tạo'} tài khoản thành công`,
//         });

//         onClose();
//         form.reset();

//         return onRefetchUser ? onRefetchUser() : window.location.reload();
//       }

//       notifications.show({
//         color: 'red',
//         message: formErrorMessage(response),
//       });

//       return null;
//     } catch (err) {
//       setAppLoading(false);

//       notifications.show({
//         color: 'red',
//         message: 'Có lỗi xảy ra',
//       });

//       return null;
//     }
//   };

//   const handleUpload = async (file: any, type: string) => {
//     form.setFieldValue(type, file?.data?.id);
//   };

//   return (
//     <Modal
//       opened={opened}
//       onClose={onClose}
//       title={form.values.id ? 'Sửa thông tin tài khoản ' : 'Tạo tài khoản'}
//       p={0}
//       classNames={{
//         header: styles.header,
//         title: styles.title,
//         body: styles.body,
//       }}
//       size="lg"
//     >
//       <form onSubmit={form.onSubmit(() => handleSubmit())}>
//         <Grid p={rem('16px')}>
//           <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
//             <UploaderAvatar
//               label="Ảnh đại diện"
//               url={form.values?.avatarImageId}
//               onDrop={(file) => handleUpload(file, 'avatarImageId')}
//             />
//           </Grid.Col>

//           <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
//             <Grid>
//               <Grid.Col span={12}>
//                 <TextInput
//                   withAsterisk
//                   label="Tên tài khoản"
//                   placeholder="Tên tài khoản"
//                   key={form.key('fullName')}
//                   {...form.getInputProps('fullName')}
//                 />
//               </Grid.Col>

//               <Grid.Col span={12}>
//                 <TextInput
//                   withAsterisk
//                   label="Email"
//                   placeholder="Email"
//                   key={form.key('email')}
//                   {...form.getInputProps('email')}
//                 />
//               </Grid.Col>
//             </Grid>
//           </Grid.Col>
//         </Grid>

//         <Group
//           gap={rem('8px')}
//           justify="flex-end"
//           py={rem('8px')}
//           px={rem('16px')}
//           style={{
//             borderTop: '1px solid var(--mantine-color-gray-scale-3)',
//           }}
//         >
//           <Button bg="gray-scale.1" onClick={onClose}>
//             Hủy
//           </Button>

//           <Button type="submit">{user?.id ? 'Lưu thay đổi' : 'Gửi email kích hoạt'}</Button>
//         </Group>
//       </form>
//     </Modal>
//   );
// };
