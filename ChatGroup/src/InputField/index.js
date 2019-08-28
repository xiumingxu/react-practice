import React, { PureComponent } from 'react';
import {style} from './index.scss';
import PropTypes from 'prop-types';

class InputField extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            textValue:''

        };
    }

    updateText = (value)=>{
        // this.state.textValue = value;
        this.setState({textValue:value});
    }
    preventDefault = (e)=>{
        e.preventDefault();
        console.log('what');
    }

    render() {
        const {textValue} = this.state;

        return (
            <div className="input-field">
                <form className="input-group" onSubmit={this.preventDefault}>
                    <input type="text" value={textValue} className="form-control" placeholder="Enter your message..." onChange={(event)=>this.updateText(event.target.value)} onSubmit={this.preventDefault}/>
                    <div className="input-group-append">
                        {/* disabled={this.isDisabled()} */}
                        <button className="btn submit-button" onClick={()=>this.props.updateMessages({username:this.props.user.username , text: textValue})}>
                        SEND
                        </button>
                    
                    </div>
                </form>
            </div>
        );
    }
}

InputField.propTypes = {
    updateMessages: PropTypes.func.isRequired,

};

export default InputField;
