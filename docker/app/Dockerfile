FROM node:18.7.0

USER root

RUN apt-get update && apt-get install -y --no-install-recommends \
    bash \
    dumb-init

# Entrypoint
COPY . /docker-files/
RUN chmod +x /docker-files/docker-entrypoint.sh
ENTRYPOINT ["/usr/bin/dumb-init", "--", "/docker-files/docker-entrypoint.sh"]

CMD ["tail", "-f", "/dev/null"]
