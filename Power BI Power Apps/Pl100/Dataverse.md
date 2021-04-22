## Microsoft Dataverse lets you securely store and manage data used by business applications.

### tables

1. Data within Dataverse is stored within a set of records called tables. A
   table is a set of records used to store data, similar to how a table stores
   data within a database.
2. Tables describe the kinds of data that is stored in the Dataverse database.
   Each table corresponds to a database table and each column (also known as an
   attribute) within a table represents a column in that table.
3. In Dataverse, metadata (data about data), is a collection of tables. table
   metadata is what controls the kinds of records you can create and what kind
   of actions can be performed on them. When you use customization tools to
   create or edit tables, columns, and table relationships, you are editing this
   metadata.

### Table relationships

1. Table relationships define the different ways table records can be associated
   with records from other tables or the same table. Table relationships are
   metadata. They let queries retrieve related data very efficiently.
2. One-to-many relationships: In a one-to-many (1:N) table relationship, many
   related table records are associated with a single primary table record in a
   parent/child relationship. 1:N relationships actually exist between tables
   and refer to each table as either a Primary/Current table or Related table.
   The related table, sometimes called the child table, has a lookup column that
   allows storing a reference to a record from the primary table, sometimes
   called the parent table.
3. Many-to-many relationships: In a many-to-many (N:N) table relationship, many
   table records are associated with many other table records. Records that are
   related through N:N table relationships are considered peers.
4. The N:1 (many-to-one) relationship type exists in the user interface because
   the designer shows you a view grouped by tables. A N:1 relationship is just a
   1:N relationship viewed from the related table.

### Table types

1. After a custom table is created, the table type can't be changed.

### Types of table owners

1. After a table is created, you can’t change the ownership.
2. When you create a custom table, the options for ownership are User or team
   owned, or Organization-owned.

- User or team owned: Actions that can be performed on these records can be
  controlled at the user level.
- Organization-owned: Access to the data is controlled at the organization
  level.

### Activity tables

1. An activity is an action that a calendar entry can be made for. Activities
   have these characteristics:

- They have time dimensions (start time, stop time, due date, and duration) that
  help define when the action occurred or will occur.
- They have data (like a subject and description) that helps define the action
  that the activity represents.
- They can be opened, canceled, or completed.
- Activity tables can be owned only by a user or team. They can't be owned by an
  organization.
- The following default activity tables are available:

- Appointment: A commitment representing a time interval that has start/end
  times and duration.
- Email: An activity that's delivered by using email protocols.
- Fax: An activity that tracks the call outcome and number of pages for a fax.
  The activity can optionally store an electronic copy of the document.
- Letter: An activity that tracks the delivery of a letter. The activity can
  store an electronic copy of the letter.
- Phone Call: An activity that tracks a telephone call.
- Recurring Appointment: The master appointment of a recurring appointment
  series.
- Task: A generic activity representing work that must be done.

2. Custom activity tables

- You can create new custom activity tables. The metadata values of activity
  tables differ from the metadata values of other tables. For example, the
  Primary column is set to Subject.

### Business Rules

1. Business rules provide a simple interface to implement and maintain
   fast-changing and commonly used rules. The business rules defined for a table
   apply to both canvas apps and model-driven apps if the table is used in the
   app.

By combining conditions and actions, you can do any of the following with
business rules:

- Set column values
- Clear column values
- Set column requirement levels
- Show or hide columns
- Enable or disable columns
- Validate data and show error messages
- Create business recommendations based on business intelligence.

### Differences between canvas and model-driven apps

1. Model-driven apps can use all actions available on business rules, however
   not all business rule actions are available for canvas apps at this time. The
   following actions are not available on Canvas apps:

- Show or hide columns
- Enable or disable columns
- Create business recommendations based on business intelligence.
