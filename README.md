# Extends for Docker Stack Deploy

**[Add support for `extends` feature in Compose v3 / docker stack deploy #31101](https://github.com/moby/moby/issues/31101)**

## Example

**Docker Stack Extends**

```bash
docker stack deploy --compose-file=<(docker-compose -f docker/prod.yml -f docker/dev.yml config) <stackname>
```

**Docker Compose Extends**

```bash
docker-compose -f docker/prod.yml -f docker/dev.yml up
```

**Verify the Files Merge Correctly**

```bash
docker-compose -f docker/prod.yml -f docker/dev.yml config
```

## Testing

You can use the `./provision` script to easily setup a Docker Swarm node for testing out this repo. You just have to add your Digital Ocean Access Token to the script at the top.

After you're done provisioning you can open a terminal connected to the swarm and run:

```bash
docker stack deploy --compose-file=<(docker-compose -f docker/prod.yml -f docker/dev.yml config) docker-stack-extends
```

To clean up after the test you can remove your digital ocean droplet by running `docker-machine rm docker-stack-extends`.
