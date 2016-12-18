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
