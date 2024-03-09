Books REST API

How to Run the API locally:

I've created a guest account with read/write access to the database on Atlas. You will be able to authenticate using the guest username and password, then run each CRUD operation as intended. 

Credentials:
guestUsername: `guest1`
guestPassword: `Peanuts1` (case sensitive)
Cluster URI: `mongodb+srv://<guestUsername>:<guestPassword>@cluster02994.arjrwut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster02994`

Add a .env file to your local repo and add a variable `DB_URI`, and set it equal to the parsed URI above using the guestUsername and guestPassword.

