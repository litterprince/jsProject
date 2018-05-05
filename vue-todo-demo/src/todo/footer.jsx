import '../assets/css/footer.less'
export default {
    data(){
        return {
            author: 'wangzhe'
        }
    },
    render(){
        return (
            <footer id="footer">
                <span>Written by {this.author}</span>
            </footer>
        )
    }
}