export default {
  base: '/:linkId',
  Admin: {
    Base: '/admin',
    Api: {
      Get: '/all',
      Add: '/add',
      Update: '/update',
      Delete: '/delete/:id',
    },
  },
} as const;
