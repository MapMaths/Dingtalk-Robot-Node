# Dingtalk-Robot-Node

A demo for Dingtalk Robot by Node.js to send messages to the chat group.

## Prerequisite

This program requires Node.js and `request` module.

```shell
npm install request
```

**Note:** `request` module has been [deprecated](https://github.com/request/request/issues/3142) and I am going to turn the depenency to `got` module.

## Usage

After installing the dependency, you can use the program as following:

1. Select the way of sending messages via a Dingtalk Robot. There are four ways (by now):
   * `text`: send a text message.
   * `markdown`: send a markdown message.
   * `link`: send a link message.
   (For more, see the [Dingtalk Robot API](https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/e8a5a5)).
   Just open the folder with the name that is the same as the way and open `server.js`.
2. Modify the definition of the variables.
3. Run the program using `node server.js`.
