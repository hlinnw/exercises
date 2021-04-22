##

1. Reasons to use environments

- Separate app development by department - In a large organization, each
  department can work in a different environment. That way, department employees
  see only apps and company data that are appropriate to their needs.
- Support application lifecycle management (ALM) - Separate environments let you
  separate apps that are in development stages from those that have already been
  shared. Alternatively, you might want to use a trial environment so that you
  can receive feedback from employees before publishing the final app. For some
  organizations, showing apps before they're completely developed and published
  can present security concerns. Manage data access - Each environment can have
  its own source of business data, called a database for Microsoft Dataverse.
  Other data connections are specific to an environment and can't be shared
  across environments.

2. Create an environment

- Only an admin can create environments.

3. Manage access to an environment

- System admin - A system admin has full permissions to create and manage
  environments.
- Environment maker - An environment maker can view all apps in that
  environment, create apps, and work with Dataverse (other permissions apply).
