import React from 'react';


class Searchbar extends React.Component{

    state = {term : ''}

    submitSearch = (e) => {
        this.setState({term: e.target.value});
        
    }

    formSubmit = e => {
        e.preventDefault();

        this.props.whenSubmitted(this.state.term);
    }

    render(){
        return(
            <div className="ui raised segment">
                <form className="ui form" onSubmit={this.formSubmit} >
                    <label className="ui tag label" style={{marginBottom:"10px"}}>Search Videos</label>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="Type in your search here" 
                            value={this.state.term}
                            onChange={this.submitSearch}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;