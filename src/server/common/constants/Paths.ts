
export default {
  Base: '/admin',
  Admin: {
    Base: '/api',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
} as const;
