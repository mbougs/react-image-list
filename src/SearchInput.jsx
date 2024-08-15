import { useState } from "react";

const SearchInput = () => {
    const [entry, setEntry] = useState('');
    
    return ( 
        <>
        <div className="ui segment">
            <form className="ui form">
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