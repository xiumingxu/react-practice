import React , {Component} from 'react';

class ListCreation extends Component {
    state = {
        value: '',
        items: [],
      };
    
      handleChange = event => {
        this.setState({ value: event.target.value });
      };
    
      addItem = event => {
        event.preventDefault();
        this.setState(oldState => ({
          items: [...oldState.items, this.state.value],
        }));
      };
    
      deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
      };
    
      inputIsEmpty = () => {
        return this.state.value === '';
      };
    
      noItemsFound = () => {
        return this.state.items.length === 0;
      };

    render(){
        return(
          <div className="list-operation">
            <h2>Shopping List</h2>
            <form onSubmit={this.addItem}>
            <input
                type="text"
                placeholder="Enter New Item"
                value={this.state.value}
                onChange={this.handleChange}
            />
            <button disabled={this.inputIsEmpty()}>Add</button>
            </form>

            <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
                Delete Last Item
            </button> 
        </div>


        );
    }


}


export default ListCreation;
