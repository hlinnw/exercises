# Understand environment roles

1. You can manage environment security by using roles and then adding users to
   the environment and assigning roles to users. A role has certain permissions
   that are associated with it, and you can associate a user with one or many
   roles. Environments have two built-in roles that provide access to
   permissions within an environment, and you'll assign users to one of these
   two roles when considering what permissions you want to give to a user in an
   environment.

The built-in environment roles are:

- System Administrator

- Environment Maker

2. System Administrator role The System Administrator role can perform all
   administrative actions on an environment, including the following tasks:

- Add or remove a user or group from either the Environment Admin or Environment
  Maker role.

- Provision a Microsoft Dataverse database for the environment.

- View and manage all resources that are created within an environment.

- Set data loss prevention policies.

3. Environment Maker role The Environment Maker role can create resources within
   an environment such as apps, connections, custom connectors, gateways, apps
   that use Power Apps, and flows that use Power Automate. The following applies
   to members of the Environment Maker role:

- Environment Makers can distribute the apps that they build in an environment
  to other users within an organization by sharing the app with individual
  users, security groups, or to all users in the organization.

- Users or groups that are assigned to these environment roles are not
  automatically given access to the environment's database (if it exists) and
  must be given access separately by a Database owner.

- Whenever a new user signs up for Power Apps, they are automatically added to
  the Maker role of the default environment.

- When you add a user to an environment, they are assigned two roles by default.

Dataverse User (this role is created when you instantiate an instance of a
Dataverse database and all users in the environment are assigned this role)

Environment Maker

4. Users or security groups can be assigned to either of these two roles by a
   System Administrator from the Power Apps Administration Center.

# Understand user security roles and security role defaults

1. Environment Maker and Environment Admin are the only predefined roles for
   environments that have no Dataverse database.

- The Environment Maker role can create resources within an environment,
  including apps, connections, custom connectors, gateways, and flows using
  Power Automate.
- Environment makers can also distribute the apps they build in an environment
  to other users in your organization. They can share the app with individual
  users, security groups, or all users in the organization.
- More information: Share an app in Power Apps For users who make apps that
  connect to the database and need to create or update entities and security
  roles, you need to assign the System Customizer role in addition to the
  Environment Maker role. This is necessary because the Environment Maker role
  doesn't have privileges on the environment's data. If the environment has a
  Dataverse database, a user must be assigned the System Administrator role
  instead of the Environment Admin role for full admin privileges, as described
  in the preceding table.

2. When you add a user to an environment in Dataverse, the user is automatically
   assigned to the following:

- Security user roles - Basic User

- Environment roles - Environment Maker
