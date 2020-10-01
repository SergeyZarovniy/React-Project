import React , {Component} from "react";
import './item-add-form.css'



export default class ItemAddForm extends Component {
    render() {
        return (
            <form className="item-add-form d-flex">
                <input className="form-control "
                       type="text"
                       onChange={this.onLabelChange}
                        placeholder="What needs to be done next?"/>
                <button className='btn btn-outline-info'
                        onClick={() => this.props.onAddElement('New Item Added')}>Add</button>

            </form>
        )
    }
};