# OpenSaurus

> A project management tool the generates and stores tokens for completed tasks. Tokens are used to vote on project decisions, such as new members, new features, and profit distribution.

> Multiple projects may be managed within the same instance of OpenSaurus. In multi-project networks, the same token(s) rewarded for a task is used to vote on both project and network decisions.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page

## App Info

### License

This project is licensed under the MIT License
