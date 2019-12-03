# Redis

## Redis启动
![20191203143551.png](https://i.loli.net/2019/12/03/xo9GiJPHMskTfUj.png)

## Redis数据类型
### Redis 字符串(String)
```bash
127.0.0.1:6379> SET cc-string clearives
OK
127.0.0.1:6379> GET cc-string
"clearives"
```
### Redis 哈希(Hash)
```bash
127.0.0.1:6379> HMSET cc-hash cc1 "Hello" cc2 "World"
OK
127.0.0.1:6379> HGET cc-hash cc1
"Hello"
127.0.0.1:6379> HGETALL cc-hash
1) "cc1"
2) "Hello"
3) "cc2"
4) "World"
```

### Redis 列表(List)
```bash
127.0.0.1:6379> LPUSH cc-list cc1
(integer) 1
127.0.0.1:6379> LPUSH cc-list cc2
(integer) 2
127.0.0.1:6379> LPUSH cc-list cc3
(integer) 3
127.0.0.1:6379> LRANGE cc-list 0 3
1) "cc3"
2) "cc2"
3) "cc1"
```

### Redis 集合(Set)
```bash
127.0.0.1:6379> SADD cc-set cc1
(integer) 1
127.0.0.1:6379> SADD cc-set cc2
(integer) 1
127.0.0.1:6379> SADD cc-set cc3
(integer) 1
127.0.0.1:6379> SMEMBERS cc-set
1) "cc2"
2) "cc3"
3) "cc1"
```

### Redis 有序集合(sorted set)
```bash
127.0.0.1:6379> ZADD cc-zset 0 cc1
(integer) 1
127.0.0.1:6379> ZADD cc-zset 0 cc2
(integer) 1
127.0.0.1:6379> ZADD cc-zset 10 cc2
(integer) 0
127.0.0.1:6379> ZRANGEBYSCORE cc-zset 0 10
1) "cc1"
127.0.0.1:6379> ZRANGEBYSCORE cc-zset 0 1100
1) "cc1"
2) "cc2"
```