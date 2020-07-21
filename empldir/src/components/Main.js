import React from 'react';
import Search from "./Search";
import Table from "./Table";
import employees from "../utils/randomusers.json"

class Main extends React.Component {
    state = {
      employees: employees,
      search: ""
    };

    searchEmpl = event => {

    }

    sortEmplByName = () => {
 //if state ===? then switch to the other state
    }

    sortEmplByDOB = () => {

    }
    
    render () {
        return (
            <div>
                <Search searchEmpl= {this.searchEmpl}/>
                <Table employees= {this.state.employees} sortEmplByName= {this.sortEmplByName} sortEmplByDOB= {this.sortEmplByDOB} />
            </div>
        )
    }
}  

export default Main;