import React, {Component} from 'react';

class Sub_user extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p onChange={this.props.Func} name={this.props.Name} contenteditable={this.props.Edit} className="profiletext" id={this.props.id} >{this.props.info}<span
                    className="glyphicon glyphicon-pencil" style={{float: 'right'}}/></p>
            </div>
        );
    }
}

export default Sub_user;