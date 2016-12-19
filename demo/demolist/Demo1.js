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
