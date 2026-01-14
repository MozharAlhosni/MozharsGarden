# Useful

```bash
sudo docker compose down -v --rmi all --remove-orphans
```

```bash
sudo docker stop $(sudo docker ps -aq)
sudo docker rm $(sudo docker ps -aq)
sudo docker rmi $(sudo docker images -aq)
sudo docker volume rm $(sudo docker volume ls -q)
sudo docker network rm $(sudo docker network ls -q)
sudo docker system prune -a --volumes
```