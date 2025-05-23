# MSTOOL - Windows/Office激活工具站点

> 一个纯静态的激活工具网站，专注于提供Windows和Office激活解决方案。



## 📝 项目说明

MSTOOL是一个开源的Windows和Office激活工具网站。本项目使用纯静态HTML+CSS+JavaScript开发，无需后端支持，可以轻松部署在任何Web服务器上。

## ⚠️ 重要提示

由于本项目使用的第三方API接口可能随时失效。我们会持续更新维护，但不保证服务永久可用。建议：及时关注公众号


## 💻 主要功能

### 1. 密钥检测

- 支持在线检测密钥状态
- 实时显示检测结果代码
- 展示密钥描述和时间信息
- 支持一键清除输入内容

### 2. 确认ID获取

- 支持电话激活方式
- 当检测结果为0xC004C008时可用
- 提供确认ID激活服务
- 支持多种产品激活

### 3. 可用密钥列表

- 分类展示各版本密钥
- 显示密钥可用次数
- 支持搜索和筛选功能
- 实时更新密钥状态

### 4. 激活工具

- 提供Windows激活工具
- 提供Office激活工具
- 包含使用教程
- 安全可靠

## 🚀 部署说明

本项目是纯静态网站，部署非常简单：
1. 下载源码并解压
2. 修改keys.json添加你的密钥数据
3. 将解压后的文件上传到Web服务器
4. 确保index.html可以正常访问

## 📊 数据维护

### keys.json结构
```json
[
    {
        "product": "Office 2021 ProPlus",
        "keys": [
            {
                "key": "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX",
                "activations": 100,
                "time": "2024-02-12 14:06:36"
            },
            {
                "key": "YYYYY-YYYYY-YYYYY-YYYYY-YYYYY", 
                "activations": 0,
                "time": "2024-02-12 14:06:36"
            }
        ]
    },
    {
        "product": "Windows 10 Pro",
        "keys": [
            {
                "key": "ZZZZZ-ZZZZZ-ZZZZZ-ZZZZZ-ZZZZZ",
                "activations": 500,
                "time": "2024-02-12 14:06:36"
            }
        ]
    }
]
```

### 数据说明
- product: 产品名称和版本
- key: 密钥字符串
- activations: 剩余可用次数
- time: 最后更新时间

### 维护建议
- 定期检查密钥状态
- 及时更新可用次数
- 移除已失效密钥
- 添加新的可用密钥
- 保持时间戳更新

## 🔌 API接口说明

本项目使用的API接口来第三方，可能存在以下情况：
- 接口可能随时失效
- 访问频率可能受限
- 返回结果可能变化
- 需要经常更新维护


## ⚠️ 免责声明

1. 本项目仅供学习和研究使用
2. 请勿用于商业用途
3. 请遵守相关法律法规
4. 请支持正版软件
5. 对于使用本项目造成的任何问题，作者不承担任何责任
6. API接口随时可能失效，请做好备用方案
7. 本项目不提供任何付费服务
8. 使用本项目即表示同意本免责声明

## 💡 获取源码

请通过以下方式获取完整源码：
- 关注公众号：CTRLER
- 在公众号后台回复：MSTOOL
- Github直接下载本项目

## 📌 注意事项

1. keys.json数据需要自行维护更新
2. 建议每周更新一次密钥状态
3. 请保留原作者信息
4. 仅供学习交流使用

## 🔧 技术栈

- HTML5
- CSS3
- JavaScript
- 响应式设计
- 纯静态实现

## 📱 兼容性

- 支持所有主流浏览器
- 适配移动端设备
- 支持响应式布局
- 无特殊环境要求

---

> 本项目仅供学习研究使用，请支持正版软件。


关注公众号【CTRLER】，获取更多技术分享！
