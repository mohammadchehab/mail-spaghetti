# Mail Spaghetti

## Idea

> The problem begins when we have multiple systems, and we want to send branded emails to users and customers. Each legacy system has his own mail management system. However we want all email templates to be managed by the content team and the programmer has the option to just call an api to send the email and pass tokens as parameters.

So many solutions are available online however they are hosted on the cloud, and they do not work with enterprise policies. So we said "Why not build one?"

## What is it going to solve
  - Centralized e-mail engine which will allow all applications to push and send emails from. Allowing external applications or cloud services to push emails from allowed on premise authorized smtp servers.
  - Interms of security this will make sure that only this application is authorized to access the smtp server. Others would need to obtain access from keycloak.
  - Centralized email designs even if you have multiple applications from different vendors or contractors.
  - Segregation of duties between Dev and Content team.

## Initial Release 0.0.1

  - Integration with Keycloak for authentication and authorization
  - Setting up database type configuration as a startup option (support will initially begins with mongo as a database)
  - Integrating Swagger for the api documentation
  - Building public queues and private queues.
  - Building the template engine.

### References

Mail Spaghetti uses a number of open source projects to work properly:

* [Keycloak] - Identity Management System Open Source 
* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [jQuery] - duh

[Keycloak]: <https://www.keycloak.org>
[df1]: <http://daringfireball.net/projects/markdown/>
[markdown-it]: <https://github.com/markdown-it/markdown-it>
[Ace Editor]: <http://ace.ajax.org>
[jQuery]: <http://jquery.com>
[AngularJS]: <http://angularjs.org>
