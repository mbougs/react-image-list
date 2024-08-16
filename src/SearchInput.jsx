import { useState } from "react";

const SearchInput = ({ onSearchSubmit }) => {
    const [entry, setEntry] = useState('');

    function onFormSubmit (e) {
        e.preventDefault();
        onSearchSubmit(entry);
        
    }
    return ( 
        <>
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <div className="ui massive icon input">
                        <input 
                        type= "text" 
                        placeholder="Search..." 
                        value={entry}
                        onChange={ e => setEntry(e.target.value) }/>
                        <i className="search icon"></i>
                    </div>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default SearchInput;