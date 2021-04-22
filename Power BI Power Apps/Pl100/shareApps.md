##

1. By default, the user receives the User permission. If you want the user to
   also be able to edit the app, then select the co-owner check box. The
   following is a description of both permissions:

- Co-owner - Users can use, edit, and share the app, but can't delete or change
  the owner.
- User - Users can view and use the app, but they can't change it.
  Security-group considerations

2. If you share an app with a security group, existing members of that group,
   and anyone who joins it, will have the permission that you specify for that
   group. Anyone who leaves the group loses that permission unless they belong
   to a different group that has access or if you give them permission as an
   individual. Every member of a security group has the same permission for an
   app as the overall group does. However, you can specify greater permissions
   for one or more members of that group to allow them greater access. For
   example, you can give Security Group A permission to run an app, but you can
   also give User B, who belongs to that group, Co-owner permission. Every
   member of the security group can run the app, but only User B can edit it. If
   you give Security Group A Co-owner permission and User B permission to run
   the app, that user can still edit the app.
3. Users and contributors need permissions to any data connections and gateways
   that a shared app uses. Some permissions come implicitly with the app, but
   you must explicitly grant others. If you create an app based on Microsoft
   Dataverse, you must also ensure that the users with whom you share the app
   have the appropriate permissions for the entity or entities on which the app
   relies. Specifically, those users must belong to a security role that can
   perform tasks such as creating, reading, writing, and deleting relevant
   records. In many cases, you'll want to create one or more custom security
   roles with the exact permissions that users need to run the app. You can then
   assign a role to each user as appropriate.
4. People who have Co-owner permission also need a Power Apps Per app plan or
   Power Apps Per user plan to work directly with entities in Dataverse.
