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
