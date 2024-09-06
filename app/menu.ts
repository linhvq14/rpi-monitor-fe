// import { ARTIST_ROUTE } from '@shared/constants/identity/creator';
// import { PARTNER_ROUTE } from '@shared/constants/identity/partner';
// import {
//   MusicMicIcon,
//   MusicNoteIcon,
//   NotificationIcon,
//   PartnerIcon,
//   SignatureIcon,
//   DocTextMagnifyingglassIcon,
//   KeyIcon,
//   BuildingColumnsFillIcon,
// } from '@shared/components/icons';
// import { E_CONTRACT_ROUTE } from '@shared/constants/e-contract/contract';
// import { E_CONTRACT_TYPE_ROUTE } from '@shared/constants/e-contract/contract-type';
// import { USER_ROUTE } from '@shared/constants/identity/user';

import { NotificationIcon } from "./shared/components/components/icons";
import { USER_ROUTE } from "./shared/constants/dashboard/user";

export const menu = [
  // {
  //   type: 'item',
  //   icon: NotificationIcon,
  //   label: 'Thông báo',
  //   link: '/',
  // },
  // { type: 'divider' },
  // {
  //   type: 'item',
  //   icon: PartnerIcon,
  //   label: 'Đối tác',
  //   children: [
  //     {
  //       type: 'item',
  //       label: 'Danh sách đối tác',
  //       // link: PARTNER_ROUTE.LIST,
  //     },
  //   ],
  // },
  // {
  //   type: 'item',
  //   icon: MusicMicIcon,
  //   label: 'Artist',
  //   children: [
  //     {
  //       type: 'item',
  //       label: 'Danh sách Artist',
  //       // link: ARTIST_ROUTE.LIST,
  //     },
  //   ],
  // },
  // {
  //   type: 'item',
  //   icon: MusicNoteIcon,
  //   label: 'Tài sản',
  //   children: [
  //     {
  //       type: 'item',
  //       label: 'Danh sách tài sản',
  //       link: '/asset',
  //     },
  //     {
  //       type: 'item',
  //       label: 'Cấu hình',
  //       link: '/asset/config-distribution-platform',
  //     },
  //   ],
  // },
  // {
  //   type: 'item',
  //   icon: SignatureIcon,
  //   label: 'Hợp đồng',
  //   children: [
  //     // { type: 'item', label: 'Danh sách hợp đồng', link: E_CONTRACT_ROUTE.LIST },
  //     // { type: 'item', label: 'Loại hợp đồng', link: E_CONTRACT_TYPE_ROUTE.LIST },
  //   ],
  // },
  // {
  //   type: 'item',
  //   icon: DocTextMagnifyingglassIcon,
  //   label: 'Đối soát',
  //   children: [
  //     {
  //       type: 'item',
  //       label: 'Kỳ đối soát',
  //       link: '/reconcile/reconciliation/reconciliation-periods',
  //     },
  //     {
  //       type: 'item',
  //       label: 'Template đối soát',
  //       link: '/reconcile/reconciliation/template',
  //     },
  //     {
  //       type: 'item',
  //       label: 'Cấu hình đối soát',
  //       link: '/reconcile/reconciliation/config',
  //     },
  //   ],
  // },
  // {
  //   type: 'item',
  //   icon: BuildingColumnsFillIcon,
  //   label: 'Công nợ',
  //   link: '/reconcile/advance',
  // },
  {
    type: 'item',
    icon: NotificationIcon,
    label: 'Dashboard',
    children: [{ type: 'item', label: 'Users', link: USER_ROUTE.LIST }],
  },
];
