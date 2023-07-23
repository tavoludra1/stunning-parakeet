# stunning-parakeet

Proyecto laravel

This definition creates two containers, one for PHP and one for MariaDB. Code will attach to the PHP container, and from within that container the MariaDB container will be available on localhost port 3306. The MariaDB instance can be managed from the container's command line with:
```bash
mysql -h localhost -P 3306  --protocol=tcp -u root --password=mariadb -D mariadb
```

