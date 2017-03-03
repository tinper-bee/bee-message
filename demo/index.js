
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Message from '../src';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;



/**
 *
 * @title 不同颜色的消息提醒
 * @description 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色
 *
 */

 const info = function () {
   Message.create({content: 'This is a Info message', color: 'info', duration: null});
 };
 const danger = function () {
   Message.create({content: 'This is a danger message', color: 'danger'});
 };
 const success = function () {
   Message.create({content: 'This is a success message', color: 'success'});
 };
 const warning = function () {
   Message.create({content: 'This is a warning message', color: 'warning'});
 };
 const loading = function () {
   Message.create({content: 'This is a dark message', color: 'dark'});
 };
 const light = function () {
   Message.create({content: 'This is a light message', color: 'light'});
 };
class Demo1 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="paddingDemo">
            <Button
                colors="info"
                onClick={info}>
                info
            </Button>
            <Button
                colors="danger"
                onClick={danger}>
                danger
            </Button>
            <Button
                colors="warning"
                onClick={warning}>
                warning
            </Button>
            <Button
                colors="success"
                onClick={success}>
                success
            </Button>
            <Button
                colors="primary"
                onClick={loading}>
                dark
            </Button>
            <Button
                shape="border"
                onClick={light}>
                light
            </Button>
            </div>
        )
    }
}
/**
 *
 * @title 不同显示位置的消息提醒
 * @description 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新
 *
 */

 const top = function () {
   Message.create({content: 'This is a Info message', position: 'top'});
 };
 const bottom = function () {
   Message.create({content: 'This is a Info message', position: 'bottom'});
 };
 const topRight = function () {
   Message.create({content: 'This is a Info message', position: 'topRight'});
 };
 const topLeft = function () {
   Message.create({content: 'This is a Info message', position: 'topLeft'});
 };
 const bottomRight = function () {
   Message.create({content: 'This is a Info message', position: 'bottomRight'});
 };
 const bottomLeft = function () {
   Message.create({content: 'This is a Info message', position: 'bottomLeft'});
 };
class Demo2 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="paddingDemo">
            <Button
                colors="info"
                onClick={top}>
                top
            </Button>
            <Button
                colors="info"
                onClick={bottom}>
                bottom
            </Button>
            <Button
                colors="info"
                onClick={topRight}>
                topRight
            </Button>
            <Button
                colors="info"
                onClick={topLeft}>
                topLeft
            </Button>
            <Button
                colors="info"
                onClick={bottomRight}>
                bottomRight
            </Button>
            <Button
                colors="info"
                onClick={bottomLeft}>
                bottomLeft
            </Button>
            </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 不同颜色的消息提醒","code":"/**\n *\n * @title 不同颜色的消息提醒\n * @description 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色\n *\n */\n\n const info = function () {\n   Message.create({content: 'This is a Info message', color: 'info', duration: null});\n };\n const danger = function () {\n   Message.create({content: 'This is a danger message', color: 'danger'});\n };\n const success = function () {\n   Message.create({content: 'This is a success message', color: 'success'});\n };\n const warning = function () {\n   Message.create({content: 'This is a warning message', color: 'warning'});\n };\n const loading = function () {\n   Message.create({content: 'This is a dark message', color: 'dark'});\n };\n const light = function () {\n   Message.create({content: 'This is a light message', color: 'light'});\n };\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div className=\"paddingDemo\">\n            <Button\n                colors=\"info\"\n                onClick={info}>\n                info\n            </Button>\n            <Button\n                colors=\"danger\"\n                onClick={danger}>\n                danger\n            </Button>\n            <Button\n                colors=\"warning\"\n                onClick={warning}>\n                warning\n            </Button>\n            <Button\n                colors=\"success\"\n                onClick={success}>\n                success\n            </Button>\n            <Button\n                colors=\"primary\"\n                onClick={loading}>\n                dark\n            </Button>\n            <Button\n                shape=\"border\"\n                onClick={light}>\n                light\n            </Button>\n            </div>\n        )\n    }\n}\n","desc":" 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色"},{"example":<Demo2 />,"title":" 不同显示位置的消息提醒","code":"/**\r\n *\r\n * @title 不同显示位置的消息提醒\r\n * @description 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新\r\n *\r\n */\r\n\r\n const top = function () {\r\n   Message.create({content: 'This is a Info message', position: 'top'});\r\n };\r\n const bottom = function () {\r\n   Message.create({content: 'This is a Info message', position: 'bottom'});\r\n };\r\n const topRight = function () {\r\n   Message.create({content: 'This is a Info message', position: 'topRight'});\r\n };\r\n const topLeft = function () {\r\n   Message.create({content: 'This is a Info message', position: 'topLeft'});\r\n };\r\n const bottomRight = function () {\r\n   Message.create({content: 'This is a Info message', position: 'bottomRight'});\r\n };\r\n const bottomLeft = function () {\r\n   Message.create({content: 'This is a Info message', position: 'bottomLeft'});\r\n };\r\nclass Demo2 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"paddingDemo\">\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={top}>\r\n                top\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottom}>\r\n                bottom\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={topRight}>\r\n                topRight\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={topLeft}>\r\n                topLeft\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottomRight}>\r\n                bottomRight\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottomLeft}>\r\n                bottomLeft\r\n            </Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );


        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
