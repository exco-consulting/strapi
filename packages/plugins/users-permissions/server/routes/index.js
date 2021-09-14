'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'users-permissions.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/search/:id',
    handler: 'users-permissions.searchUsers',
    config: {
      policies: [],
      description: 'Search for users',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
        actionType: 'find',
      },
    },
  },
  {
    method: 'GET',
    path: '/policies',
    handler: 'users-permissions.getPolicies',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/roles/:id',
    handler: 'users-permissions.getRole',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.roles.read'] },
        },
      ],
      description: 'Retrieve a role depending on its id',
      tag: {
        plugin: 'users-permissions',
        name: 'Role',
        actionType: 'findOne',
      },
    },
  },
  {
    method: 'GET',
    path: '/roles',
    handler: 'users-permissions.getRoles',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.roles.read'] },
        },
      ],
      description: 'Retrieve all role documents',
      tag: {
        plugin: 'users-permissions',
        name: 'Role',
        actionType: 'find',
      },
    },
  },
  {
    method: 'GET',
    path: '/routes',
    handler: 'users-permissions.getRoutes',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/email-templates',
    handler: 'users-permissions.getEmailTemplate',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.email-templates.read'] },
        },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/email-templates',
    handler: 'users-permissions.updateEmailTemplate',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.email-templates.update'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/advanced',
    handler: 'users-permissions.getAdvancedSettings',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.advanced-settings.read'] },
        },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/advanced',
    handler: 'users-permissions.updateAdvancedSettings',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.advanced-settings.update'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/permissions',
    handler: 'users-permissions.getPermissions',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/providers',
    handler: 'users-permissions.getProviders',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.providers.read'] },
        },
      ],
    },
  },

  {
    method: 'PUT',
    path: '/providers',
    handler: 'users-permissions.updateProviders',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.providers.update'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/roles',
    handler: 'users-permissions.createRole',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.roles.create'] },
        },
      ],
      description: 'Create a new role',
      tag: {
        plugin: 'users-permissions',
        name: 'Role',
        actionType: 'create',
      },
    },
  },
  {
    method: 'PUT',
    path: '/roles/:role',
    handler: 'users-permissions.updateRole',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.roles.update'] },
        },
      ],
      description: 'Update a role',
      tag: {
        plugin: 'users-permissions',
        name: 'Role',
        actionType: 'update',
      },
    },
  },
  {
    method: 'DELETE',
    path: '/roles/:role',
    handler: 'users-permissions.deleteRole',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          options: { actions: ['plugin::users-permissions.roles.delete'] },
        },
      ],
      description: 'Delete a role',
      tag: {
        plugin: 'users-permissions',
        name: 'Role',
        actionType: 'destroy',
      },
    },
  },
  {
    method: 'GET',
    path: '/connect/*',
    handler: 'auth.connect',
    config: {
      policies: ['plugin::users-permissions.rateLimit'],
      prefix: '',
      description: 'Connect a provider',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
      },
    },
  },
  {
    method: 'POST',
    path: '/auth/local',
    handler: 'auth.callback',
    config: {
      policies: ['plugin::users-permissions.rateLimit'],
      prefix: '',
      description: 'Login a user using the identifiers email and password',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
      },
    },
  },
  {
    method: 'POST',
    path: '/auth/local/register',
    handler: 'auth.register',
    config: {
      policies: ['plugin::users-permissions.rateLimit'],
      prefix: '',
      description: 'Register a new user with the default role',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
        actionType: 'create',
      },
    },
  },
  {
    method: 'GET',
    path: '/auth/:provider/callback',
    handler: 'auth.callback',
    config: {
      policies: [],
      prefix: '',
      description: 'Successfull redirection after approving a provider',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
      },
    },
  },
  {
    method: 'POST',
    path: '/auth/forgot-password',
    handler: 'auth.forgotPassword',
    config: {
      policies: ['plugin::users-permissions.rateLimit'],
      prefix: '',
      description: 'Send the reset password email link',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
      },
    },
  },
  {
    method: 'POST',
    path: '/auth/reset-password',
    handler: 'auth.resetPassword',
    config: {
      policies: ['plugin::users-permissions.rateLimit'],
      prefix: '',
      description: 'Reset user password with a code (resetToken)',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
      },
    },
  },
  {
    method: 'GET',
    path: '/auth/email-confirmation',
    handler: 'auth.emailConfirmation',
    config: {
      policies: [],
      prefix: '',
      description: 'Validate a user account',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
      },
    },
  },
  {
    method: 'POST',
    path: '/auth/send-email-confirmation',
    handler: 'auth.sendEmailConfirmation',
    config: {
      policies: [],
      prefix: '',
      description: 'Send a confirmation email to user',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
      },
    },
  },
  {
    method: 'GET',
    path: '/users/count',
    handler: 'user.count',
    config: {
      prefix: '',
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/users',
    handler: 'user.find',
    config: {
      policies: [],
      prefix: '',
      description: 'Retrieve all user documents',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
        actionType: 'find',
      },
    },
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: 'user.me',
    config: {
      policies: [],
      prefix: '',
      description: 'Retrieve the logged in user information',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
        actionType: 'findOne',
      },
    },
  },
  {
    method: 'GET',
    path: '/users/:id',
    handler: 'user.findOne',
    config: {
      policies: [],
      prefix: '',
      description: 'Retrieve a single user depending on his id',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
        actionType: 'findOne',
      },
    },
  },
  {
    method: 'POST',
    path: '/users',
    handler: 'user.create',
    config: {
      policies: [],
      prefix: '',
    },
  },
  {
    method: 'PUT',
    path: '/users/:id',
    handler: 'user.update',
    config: {
      policies: [],
      prefix: '',
      description: 'Update an existing user',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
        actionType: 'update',
      },
    },
  },
  {
    method: 'DELETE',
    path: '/users/:id',
    handler: 'user.destroy',
    config: {
      policies: [],
      prefix: '',
      description: 'Delete an existing user',
      tag: {
        plugin: 'users-permissions',
        name: 'User',
        actionType: 'destroy',
      },
    },
  },
];