# MERNG

<p align="center">
<a href="https://www.npmjs.com/package/@kutaloweb/merng"><img src="https://img.shields.io/npm/v/@kutaloweb/merng.svg" alt="Latest Stable Version"></a>
</p>

MERNG is an extended [Kriasoft's](https://reactstarter.com/) scaffolding tool which makes it easy to build universal apps using Mongo, Express, React, NodeJS and GraphQL. It minimises the setup time and gets you up to speed using proven technologies.

Try it out here: https://merng.kutaloweb.rocks

Play with GraphQL here: https://merng.kutaloweb.rocks/graphql

```
mutation {
  databaseCreateUser(
    email: "testuser1@gmail.com"
    password: "111111"
) {
    success,
    error,
    user {
      _id,
      email
    }
  }
}
```

```
query {
  databaseGetAllUsers {
    _id,
    email,
  }
}
```

## Getting Started

These instructions will get you a copy of the project up and running on your local Linux or Mac OS X machine

Please make sure your MongoDB is running

### Installing

Move to your web projects directory and clone the application using Git

```
cd /var/www/html
git clone https://github.com/kutaloweb/merng
```

Move to application directory

```
cd merng
```

Install the application dependencies

```
npm install
```

Execute the NPM script

```
npm run start
```

### Deploy

Start app with process manager PM2 (you might have to change the path and the mode in start.sh)

```
pm2 start start.sh --name meaaga
```

## Contributing

As an open project, I welcome contributions from everybody. Please, feel free to fork the repository and submit pull requests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Premium Support

Want help with implementation or new features? Start a conversation with me: dev.solution888@gmail.com
