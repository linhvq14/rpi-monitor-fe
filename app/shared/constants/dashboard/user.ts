
export const USER_ROUTE = {
  LIST: '/dashboard/users',
  // CREATE: '/identity/user/new',
  DETAIL: (id: string) => `/user/${id}`,
  // EDIT: (id: string) => `/identity/user/edit/${id}`,
};

export const USER_STATUS = {
  1: { label: 'Active', bg: 'green', c: 'white' },
  2: { label: 'Inactive', bg: 'gray', c: 'white' },
  3: { label: 'Pending', bg: 'orange', c: 'white' },
  4: { label: 'Suspended', bg: 'red', c: 'white' },
  // Add other statuses as needed
};