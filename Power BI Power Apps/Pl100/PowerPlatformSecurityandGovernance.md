# Identify Power Platform environments

1. Environments act as a security container for apps and flows to run within.
   Every flow must be assigned to an environment. Every licensed user belongs to
   the default environment.
2. The following admins will be able to create new environments in the Power
   Platform admin center:

- Global admins
- Dynamics 365 admins
- Power Platform admins

3. When creating an environment, organizations can choose which region they want
   their environment to reside in. This approach is important because it allows
   organizations to store data closer to actual users and to maintain and meet
   compliance requirements for their geography.
4. For administrators to view analytics, they need to select an environment
   first before they can view telemetry.

# Data Loss Prevention policies

1. Data Loss Prevention (DLP) policies allow organizations to construct rules
   that permit and prevent connectors from communicating with each other within
   the same flow. Microsoft accomplishes this task by establishing two data
   groups: Business data only and No business data allowed.
2. You can specify one data group to be the default data group. The default data
   group is significant because it becomes the data group that all new
   connectors are added to. This behavior is also true for custom connectors
   that are deployed to an environment.
3. DLP policies can belong to two different scopes: environment and tenant. An
   environment-scoped DLP policy only applies to that specific environment,
   whereas a tenant-scoped DLP policy applies to all environments in that
   tenant.
4. To establish an environment-wide DLP policy, the person who is creating the
   DLP policy must be an environment or tenant admin. When creating a
   tenant-wide DLP policy, the person who is creating the DLP policy must be a
   tenant admin.
5. You can create a DLP policy that only applies to an environment. In addition,
   you can create a DLP policy that applies to the entire tenant, which means
   that when new environments are created, they automatically inherit this
   tenant-wide DLP policy.

# Create a Power Automate environment

1. When creating a new DLP policy, policy authors have a few options that they
   can choose from, including the ability to Add all environments (tenant), Add
   multiple environments, and Exclude certain environments. When selecting the
   Type of environment, you do have three options: Sandbox, Production, and
   Trial. Sandbox environments are for building proof-of-concept applications
   and flows that might need to be reset without recreating the entire
   environment. Production environments are suited for stable workloads where
   you have predictable usage. Trial environments will expire after 30 days.
   These environments are best suited for evaluating technologies.

# Exercise

1. Breaking an existing app due to a new DLP policy change will create a
   negative experience for app makers and users. However, using the DLP Strategy
   app can mitigate these issues by detecting changes before they are made. An
   experience also exists that allows the administrator to send an email within
   the app.
2. Administrators cannot restrict access to the default environment. Otherwise,
   users are likely to create resources outside of the visibility of
   administrators, which will mean that admins will no longer have any
   visibility or control of those resources.

# CoE

1. A Center of Excellence (CoE) drives innovation and improvement and brings
   together like-minded people who have similar business goals to share
   knowledge and success, while providing standards, consistency, and
   governance.

The kit doesn't represent the entire CoE because managing a CoE requires more
than tools alone; the CoE also requires people, communication, and defined
requirements and processes. The tools that are provided in this module are only
a means to get to the end goal, but the CoE must be thoughtfully designed by
each organization based on their needs and preferences.

The underlying features and components that are used to build the kit (such as
Dataverse, admin APIs, and connectors) are fully supported. The kit represents
sample implementations of these features. Customers and community can use and
customize these features to implement admin and governance capabilities in their
organizations.
