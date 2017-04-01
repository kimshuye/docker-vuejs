# docker-vuejs


```bash
export VUEPRJ="/home/me/projects/vue"
docker run -d --restart always -p 8080:8080 -v $(VUEPRJ):/vuejs/src zimdo/docker-vuejs:latest
```