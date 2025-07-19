import './app-info.css';
function AppInfo({ increased, employees }) {
    return (
        <div className="app-info">
            <h1>Employee accounting in company N</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The prize will be awarded: {increased}</h2>
        </div>
    )
}

export default AppInfo;