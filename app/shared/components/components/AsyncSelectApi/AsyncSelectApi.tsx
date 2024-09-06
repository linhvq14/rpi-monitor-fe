// import React, { useState } from 'react';
// import { Input, rem, Text, Loader, Box } from '@mantine/core';
// import dynamic from 'next/dynamic';
// import { DropdownIndicatorProps, ClearIndicatorProps, components } from 'react-select';
// import { fetchListPartners } from '@shared/apis/identity/partner';
// import { ArrowDropdownIcon, XmarkIcon } from '@shared/components/icons';
// import { fetchListContractTypes } from '../../apis/e-contract/contract-type';
// import { fetchListContracts } from '../../apis/e-contract/contract';

// const AsyncSelect = dynamic(() => import('react-select/async'), { ssr: false });

// interface AsyncSelectApiProps {
//   label?: string;
//   placeholder?: string;
//   emptyMessage?: string;
//   onChange?: ({ label, value }: { label: string; value: string }) => void;
//   value?: { label: string; value: string };
//   isClearable?: boolean;
//   isDisabled?: boolean;
//   inputProps?: any;
//   apiProps?: any;
//   customStyles?: any;
//   other?: any;
// }

// export const AsyncSelectApi = ({
//   onChange,
//   value,
//   label,
//   placeholder,
//   isClearable,
//   isDisabled,
//   inputProps,
//   apiProps,
//   customStyles,
//   other,
// }: AsyncSelectApiProps) => {
//   const [options, setOptions] = useState<any[]>([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   const getService = (service: string) => {
//     switch (service) {
//       case 'partners':
//         return fetchListPartners;
//       case 'contracts':
//         return fetchListContracts;
//       case 'contractTypes':
//         return fetchListContractTypes;
//       default:
//         throw new Error(`Unknown service: ${service}`);
//     }
//   };

//   const loadOptions = async (searchValue: string) => {
//     if (!searchValue && isLoaded) {
//       return options;
//     }

//     const service: any = getService(apiProps.service);
//     const response = await service({
//       pageSize: apiProps?.params?.pageSize || 50,
//       fields: { ...apiProps?.params?.fields, search: searchValue },
//     });

//     let data = response.data[apiProps.service] || [];

//     if (apiProps?.excludesIds?.length) {
//       data = data.filter((item: any) => !apiProps?.excludesIds?.includes(item.id));
//     }

//     const formattedOptions = data.map((item: any) => ({
//       label: apiProps?.field?.label
//         ? item[apiProps?.field?.label]
//         : [
//             apiProps.service === 'partners' || apiProps.service === 'contracts' ? item.code : '',
//             item.fullName || item?.name || item?.stageName || '',
//           ]
//             .filter((n) => n)
//             .join(' - '),
//       value: apiProps?.field?.value ? item[apiProps?.field?.value] : item.id,
//     }));

//     setOptions(formattedOptions);
//     setIsLoaded(true);
//     return formattedOptions;
//   };

//   const handleFocus = () => {
//     if (!isLoaded) {
//       loadOptions('');
//     }
//   };

//   const DropdownIndicator = (props: DropdownIndicatorProps) => (
//     <components.DropdownIndicator {...props}>
//       <ArrowDropdownIcon fill="var(--mantine-color-gray-scale-5)" width="22px" />
//     </components.DropdownIndicator>
//   );

//   const ClearIndicator = (props: ClearIndicatorProps) => (
//     <components.ClearIndicator {...props}>
//       <XmarkIcon fill="var(--mantine-color-gray-scale-7)" width="18px" />
//     </components.ClearIndicator>
//   );

//   const LoadingIndicator = () => (
//     <Box
//       style={{
//         position: 'absolute',
//         top: '50%',
//         right: rem('10px'),
//         transform: 'translateY(-50%)',
//         fontSize: 0,
//       }}
//     >
//       <Loader size={18} color="gray-scale.5" style={{ backgroundColor: '#ffffff' }} />
//     </Box>
//   );

//   const Option = (props: any) => {
//     if (apiProps.excludesIds?.includes(props?.data?.value)) {
//       return null;
//     }
//     return (
//       <components.Option {...props}>
//         <>
//           <Text
//             fz={rem('15px')}
//             lineClamp={2}
//             style={{
//               wordBreak: 'break-word',
//             }}
//           >
//             {props?.data?.label || ''}
//           </Text>
//         </>
//       </components.Option>
//     );
//   };

//   const NoOptionsMessage = (props: any) => (
//     <components.NoOptionsMessage {...props}>
//       <Text fz={rem('15px')} c="gray-scale.5">
//         {isLoaded ? 'No result!' : 'Đang tải...'}
//       </Text>
//     </components.NoOptionsMessage>
//   );

//   const LoadingMessage = (props: any) => (
//     <components.LoadingMessage {...props}>
//       <Text fz={rem('15px')} c="gray-scale.5">
//         Đang tải...
//       </Text>
//     </components.LoadingMessage>
//   );

//   return (
//     <Input.Wrapper label={label || ''} {...inputProps}>
//       <AsyncSelect
//         className="metub-react-select-container"
//         classNamePrefix="metub-react-select"
//         styles={{
//           container: (baseStyles) => ({
//             ...baseStyles,
//           }),
//           control: (baseStyles) => ({
//             ...baseStyles,
//             borderColor: 'var(--mantine-color-gray-scale-3)',
//             boxShadow: 'none',
//             '&:hover': {
//               borderColor: 'var(--mantine-color-gray-scale-3)',
//             },
//             minHeight: rem('44px'),
//             ...(customStyles?.control || {}),
//           }),
//           singleValue: (baseStyles) => ({
//             ...baseStyles,
//             color: 'var(--mantine-color-gray-scale-10)',
//             fontSize: rem('15px'),
//             lineHeight: rem('24px'),
//             fontWeight: 400,
//           }),
//           option: (baseStyles) => ({
//             ...baseStyles,
//             color: 'var(--mantine-color-gray-scale-10)',
//             ':active': {
//               backgroundColor: 'var(--mantine-color-background-2) !important',
//             },
//             ':focus': {
//               backgroundColor: 'var(--mantine-color-background-2)',
//             },
//             fontSize: rem('15px'),
//             lineHeight: rem('24px'),
//             fontWeight: 400,
//           }),
//           placeholder: (defaultStyles) => ({
//             ...defaultStyles,
//             color: 'var(--mantine-color-gray-scale-4)',
//             fontSize: rem('15px'),
//             fontWeight: 400,
//           }),
//           menuPortal: (base) => ({ ...base, zIndex: 9999 }),
//           clearIndicator: (baseStyles) => ({
//             ...baseStyles,
//             position: 'absolute',
//             right: rem('2px'),
//             backgroundColor: '#ffffff',
//           }),
//           loadingIndicator: (baseStyles) => ({
//             ...baseStyles,
//             fontSize: rem('15px'),
//             fontWeight: 400,
//           }),
//           input: (baseStyles) => ({
//             ...baseStyles,
//             fontSize: rem('15px'),
//             fontWeight: 400,
//           }),
//           menu: (styles) => ({ ...styles, ...(customStyles?.menu || {}) }),
//         }}
//         theme={(theme) => ({
//           ...theme,
//           colors: {
//             ...theme.colors,
//             primary25: 'var(--mantine-color-background-2)',
//             primary: 'var(--mantine-color-background-2)',
//           },
//         })}
//         placeholder={placeholder || 'Tìm kiếm'}
//         menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
//         menuPlacement="auto"
//         cacheOptions
//         defaultOptions={options}
//         isClearable={isClearable}
//         value={value}
//         components={{
//           LoadingIndicator,
//           DropdownIndicator,
//           ClearIndicator,
//           Option,
//           NoOptionsMessage,
//           IndicatorSeparator: () => null,
//           LoadingMessage,
//         }}
//         loadOptions={loadOptions}
//         onFocus={handleFocus}
//         onChange={onChange}
//         isDisabled={isDisabled}
//         {...other}
//       />
//     </Input.Wrapper>
//   );
// };
