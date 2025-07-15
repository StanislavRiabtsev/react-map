import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesLitsItem from '../employees-list-item/employees-list-item';



import './app.css';
function App() {
    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
                <EmployeesLitsItem />
                <EmployeesList />
                <EmployeesAddForm />
            </div>
        </div>
    );
}

export default App;