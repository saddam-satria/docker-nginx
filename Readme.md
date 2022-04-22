## Docker Nginx server node ts

<p>example using docker with nginx upstream nodejs server.</p>

### server boilerplate

> https://github.com/saddam-satria/server-node-ts

### Development Mode

```
> cd server
> yarn run dev

```

> listening port 5000 [Localhost](http://localhost:5000)

### Production Mode

```
> cd server
> yarn run build

```

> listening port 5000 [Localhost](http://localhost:5000)

### Testing Mode

```
> cd server
> yarn run test

```

### Deployment Proccess

```

> docker-compose -f container.yml up -d

```

> listening port 80 [Localhost](http://localhost)
