# Manage Power Virtual Agents

1. Topics are the no-code way to create discrete conversation paths that, when
   used together within a single bot, allow users to have a conversation with a
   bot that feels natural and flows appropriately.
2. Topics are siloed in each bot and can't be shared, even if they're part of
   the same environment.
3. By default, each bot comes with 12 topics, of which only four can be turned
   off. The remaining topics will always be turned on and can't be deleted.
4. Currently, the only way to export and import topics from one environment to
   another is by using solutions and migrating the entire chatbot. In Solutions,
   you can add your existing chatbot and it will include all its topics
   automatically.
5. The best way to monitor the status and diagnose the error of your chatbot is
   at the topic level.
6. A session will end for one of the following reasons:

- The user ends the chat session. When the bot doesn't receive a new message for
  more than 30 minutes, the session is considered closed.

- The session is longer than 60 minutes. The first message that occurs after 60
  minutes starts a new session.

- The session has more than 100 turns. A turn is defined as one exchange between
  a user and the bot. The one-hundred-and-first turn starts a new session.
