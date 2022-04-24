## Docker Nginx server node ts

<p>example using docker with nginx upstream nodejs server.</p>

### boilerplate

> https://github.com/saddam-satria/server-node-ts

> https://github.com/saddam-satria/react-boilerplate

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
> cd frontend
> yarn run build
> move frontend/build folder to nginx folder

```

> listening port 80 [Localhost](http://localhost)

```
/ => root which is where the frontend be served
/api => where the backend served

```

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
