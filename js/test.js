class Test extends React.Component{
    /*
    * 1、调用super的原因：在ES6中，在子类的constructor中必须先调用super才能引用this
    * 2、super(props)的目的：在constructor中可以使用this.props
    */
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>hahahhaha</div>
        )
    }
}

ReactDOM.render(<Test/>, document.querySelector("#react_root"));