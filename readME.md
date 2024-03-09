Books REST API

How to Run the API locally:

I've created a guest account with read/write access to the database on Atlas. You will be able to authenticate using the guest username and password, then run each CRUD operation as intended. 

guestUsername: guest1
guestPassword: Peanuts1 (case sensitive)
Cluster URI: mongodb+srv://<guestUsername>:<guestPassword>@cluster02994.arjrwut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster02994

The above URI should be parsed with the username & password credentials and then entered as the `DB_URI` variable in your .env file.
