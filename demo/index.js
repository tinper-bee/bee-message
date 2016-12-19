
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Message from '../src';

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 不同颜色的消息提醒
 *
 */

 const info = function () {
   Message.info('This is a info message');
 };
 const danger = function () {
   Message.error('This is a error message');
 };
 const success = function () {
   Message.success('This is a success message');
 };
 const warning = function () {
   Message.warning('This is a warning message');
 };
 const loading = function () {
   Message.loading('This is a loading message');
 };
class Demo1 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
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
                normal
            </Button>
            </div>
        )
    }
}
/**
 *
 * @title 不同显示位置的消息提醒
 *
 */

 const top = function () {
   Message.info('This is a top message',3,null,'top');
 };
 const bottom = function () {
   Message.info('This is a bottom message',null,null,'bottom');
 };
 const topRight = function () {
   Message.info('This is a topRight message',3,null,'topRight');
 };
 const topLeft = function () {
   Message.info('This is a topLeft message',3,null,'topLeft');
 };
 const bottomRight = function () {
   Message.info('This is a bottomRight message',3,null,'bottomRight');
 };
 const bottomLeft = function () {
   Message.info('This is a bottomLeft message',3,null,'bottomLeft');
 };
class Demo2 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
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
var DemoArray = [{"example":<Demo1 />,"title":" 不同颜色的消息提醒","code":"/**\n *\n * @title 不同颜色的消息提醒\n *\n */\n\n const info = function () {\n   Message.info('This is a info message');\n };\n const danger = function () {\n   Message.error('This is a error message');\n };\n const success = function () {\n   Message.success('This is a success message');\n };\n const warning = function () {\n   Message.warning('This is a warning message');\n };\n const loading = function () {\n   Message.loading('This is a loading message');\n };\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div>\n            <Button\n                colors=\"info\"\n                onClick={info}>\n                info\n            </Button>\n            <Button\n                colors=\"danger\"\n                onClick={danger}>\n                danger\n            </Button>\n            <Button\n                colors=\"warning\"\n                onClick={warning}>\n                warning\n            </Button>\n            <Button\n                colors=\"success\"\n                onClick={success}>\n                success\n            </Button>\n            <Button\n                colors=\"primary\"\n                onClick={loading}>\n                normal\n            </Button>\n            </div>\n        )\n    }\n}\n","desc":""},{"example":<Demo2 />,"title":" 不同显示位置的消息提醒","code":"/**\r\n *\r\n * @title 不同显示位置的消息提醒\r\n *\r\n */\r\n\r\n const top = function () {\r\n   Message.info('This is a top message',3,null,'top');\r\n };\r\n const bottom = function () {\r\n   Message.info('This is a bottom message',null,null,'bottom');\r\n };\r\n const topRight = function () {\r\n   Message.info('This is a topRight message',3,null,'topRight');\r\n };\r\n const topLeft = function () {\r\n   Message.info('This is a topLeft message',3,null,'topLeft');\r\n };\r\n const bottomRight = function () {\r\n   Message.info('This is a bottomRight message',3,null,'bottomRight');\r\n };\r\n const bottomLeft = function () {\r\n   Message.info('This is a bottomLeft message',3,null,'bottomLeft');\r\n };\r\nclass Demo2 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n    render () {\r\n        return (\r\n            <div>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={top}>\r\n                top\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottom}>\r\n                bottom\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={topRight}>\r\n                topRight\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={topLeft}>\r\n                topLeft\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottomRight}>\r\n                bottomRight\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottomLeft}>\r\n                bottomLeft\r\n            </Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":""}]


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

        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
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
