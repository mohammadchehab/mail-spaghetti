# Mail Spaghetti

## Idea

> The problem begins when we have multiple systems, and we want to send branded emails to users and customers. Each legacy system has his own mail management system. However we want all email templates to be managed by the content team and the programmer has the option to just call an api to send the email and pass tokens as parameters.

So many solutions are available online however they are hosted on the cloud, and they do not work with enterprise policies. So we said "Why not build one?"

## Initial Release 0.0.1

  - Integration with Keycloak for authentication and authorization
  - Setting up database type configuration as a startup option (support will initially begins with mongo as a database)
  - Integrating Swagger for the api documentation
  - Building public queues and private queues.
  - Building the template engine.
