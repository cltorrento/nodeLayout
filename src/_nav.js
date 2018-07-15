export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Seguridad',
      url: '/widgets',
      icon: 'icon-calculator',
      children: [
        {
          name: 'Usuarios',
          url: '/users',
          icon: 'icon-pencil',
        },
        {
          name: 'Roles',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Bitacora',
          url: '/login',
          icon: 'icon-star',
        },
      ],
    },



    {
      name: 'Catalogo',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Developers',
          url: '/base/developers',
          icon: 'icon-pencil',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
      ],
    },

    {
      divider: true,
    },
    {
      name: 'cltorrento.it',
      url: 'http://www.cltorrento.it/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
    },
  ],
};
