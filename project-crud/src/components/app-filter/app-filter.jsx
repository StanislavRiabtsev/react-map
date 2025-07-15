import './app-filter.css';

function AppFilter() {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type='button'>
                All employees
            </button>
            <button
                className="btn btn-outline-light"
                type='button'>
                On the rise
            </button>
            <button
                className="btn btn-outline-light"
                type='button'>
                Salary over $1000
            </button>
        </div>
    );
}

export default AppFilter;