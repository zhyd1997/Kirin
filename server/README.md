# Before start

Add a `.env` file in the server root folder.

```env
	NODE_ENV=development | production
	PORT=eg, 5000

	MONGO_URI=Your own MongoDB url which can get from MongoDB Atlas

	SMTP_HOST=Retrieve SMTP_ fields from https://mailtrap.io/ for devlopment or real email account that supports SMTP (eg, Gmail) for production
	SMTP_PORT=...
	SMTP_USER=...
	SMTP_PWD=...
	FROM_EMAIL=...
	FROM_NAME=...

	JWT_SECRET=Your custom secret key
	JWT_EXPIRE=Custom(eg, 30d)
	JWT_COOKIE_EXPIRE=Custom(eg, 30)

```
