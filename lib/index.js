'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = require('assert');
var exec = require('child_process').exec;

var DingTalkRobot = function () {
  function DingTalkRobot(accessToken) {
    _classCallCheck(this, DingTalkRobot);

    assert(accessToken, 'accessToken is necessary!');
    this.accessToken = accessToken;
  }

  /**
   * text 类型
   * text String 必填 文本内容
   * isAtAll 选填 是否抄送所有人
   */


  _createClass(DingTalkRobot, [{
    key: 'sendText',
    value: function sendText() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var isAtAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.send({
        msgtype: 'text',
        text: {
          content: text
        },
        at: {
          isAtAll: isAtAll
        }
      });
    }

    /**
     * link类型
     * text String 必填 文本内容
     * title String 必填 消息标题
     * picUrl String 必填 展示图片
     * messageUrl String 必填 点击消息跳转的URL
     */

  }, {
    key: 'sendLink',
    value: function sendLink(linkObject) {
      this.send({
        msgtype: 'link',
        link: linkObject
      });
    }

    /**
     * 发布markdown 消息
     * {
     *  "title":"杭州天气",
     *  "text": "#### 杭州天气\n"
     *  }
     * @param markdownContent
     */

  }, {
    key: 'sendMarkdown',
    value: function sendMarkdown(markdownContent) {
      var _markdownContent$titl = markdownContent.title,
          title = _markdownContent$titl === undefined ? '无题' : _markdownContent$titl,
          _markdownContent$text = markdownContent.text,
          text = _markdownContent$text === undefined ? '' : _markdownContent$text;

      this.send({
        msgtype: 'markdown',
        markdown: {
          title: title,
          text: text
        }
      });
    }
  }, {
    key: 'send',
    value: function send(contentBody) {
      exec('\n      curl \'https://oapi.dingtalk.com/robot/send?access_token=' + this.accessToken + '\'        -H \'Content-Type: application/json\'        -d \'' + JSON.stringify(contentBody) + '\'\n    ');
    }
  }]);

  return DingTalkRobot;
}();

module.exports = DingTalkRobot;