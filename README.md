# Extends for Docker Stack Deploy

**[Add support for `extends` feature in Compose v3 / docker stack deploy #31101](https://github.com/moby/moby/issues/31101)**

## Example

**Docker Stack Deploy**

```bash
docker stack deploy --compose-file=<(docker-compose -f docker/prod.yml -f docker/dev.yml config) <stackname>
```

**Local Docker Compose**

```bash
docker-compose -f docker/prod.yml -f docker/dev.yml up
```
