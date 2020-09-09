import React from 'react';
import '../css/toolbar.css';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="toobar1 row">
                <div>Logo</div>
                <div>
                    <i className="material-icons">notifications</i>
                </div>
                <div>
                    <i className="material-icons">save_alt</i>
                </div>
            </div>
            <div className="toobar2 row">
                <div>
                    <i className="material-icons">today</i>
                </div>
                <div>
                    <i className="material-icons">person_add</i>
                </div>
                <div>
                    <i className="material-icons">search</i>
                </div>
                <div className="question-mark">
                    ?
                </div>
                <div>
                    <i className="material-icons">account_circle</i>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;