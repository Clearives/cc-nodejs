# 功能说明
## OAuth2.0授权获取github信息
**第一步**
创建新的Oauth app
![20191113105833.png](https://i.loli.net/2019/11/13/2DRhlwiXZ8aU3Me.png)
**第二步**
填写Homepage URL，Authorization callback URL
![20191113110205.png](https://i.loli.net/2019/11/13/96RNVTrmhzdeB1l.png)
**第三步**
获取Client ID，Client Secret

## code
### https://github.com/login/oauth/access_token
获取access_token

#### Request1
- Method: **POST**
- URL:  ```https://github.com/login/oauth/access_token```


### https://api.github.com/user
获取github用户信息
#### Request2
- Method: **POST**
- URL:  ```https://api.github.com/user```


### Response
![Response.png](https://i.loli.net/2019/11/13/tWpdSzsl5YwmFyo.png)