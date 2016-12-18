
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
 * @title 不同方向的气泡提示
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
                Display normal message
            </Button>
            <Button
                colors="danger"
                onClick={danger}>
                Display normal message
            </Button>
            <Button
                colors="warning"
                onClick={warning}>
                Display normal message
            </Button>
            <Button
                colors="success"
                onClick={success}>
                Display normal message
            </Button>
            <Button
                colors="primary"
                onClick={loading}>
                Display normal message
            </Button>
            </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 不同方向的气泡提示","code":"/**\n *\n * @title 不同方向的气泡提示\n *\n */\n\n const info = function () {\n   Message.info('This is a info message');\n };\n const danger = function () {\n   Message.error('This is a error message');\n };\n const success = function () {\n   Message.success('This is a success message');\n };\n const warning = function () {\n   Message.warning('This is a warning message');\n };\n const loading = function () {\n   Message.loading('This is a loading message');\n };\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div>\n            <Button\n                colors=\"info\"\n                onClick={info}>\n                Display normal message\n            </Button>\n            <Button\n                colors=\"danger\"\n                onClick={danger}>\n                Display normal message\n            </Button>\n            <Button\n                colors=\"warning\"\n                onClick={warning}>\n                Display normal message\n            </Button>\n            <Button\n                colors=\"success\"\n                onClick={success}>\n                Display normal message\n            </Button>\n            <Button\n                colors=\"primary\"\n                onClick={loading}>\n                Display normal message\n            </Button>\n            </div>\n        )\n    }\n}\n","desc":""}]


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
