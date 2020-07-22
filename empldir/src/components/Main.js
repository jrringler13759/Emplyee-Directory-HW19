import React from 'react';
import Search from "./Search";
import Table from "./Table";
import employees from "../utils/randomusers.json"

class Main extends React.Component {
    state = {
      employees: employees,
      search: "",
      ordered: "A" ,
      foundEmpl: []
    };

    searchLastName = () => {
        const {employees, search} = this.state;

        let foundEmpl = employees.filter(found => {
            return (
                found.lastName.toLowerCase().includes(search.toLowerCase())
            )
        })
        this.setState({foundEmpl})
    }

    sortEmplByName = () => {
 //if state ===? then switch to the other state
        if ( this.state.order === "A") {
            this.setState({
                order: "D"
            });
        } else {
            this.setState ({
                order: "A"
            })
        }

        // this.setState({
        //     order: "ascend"
        // })
    }

    sortEmplByDOB = () => {
        
    }
    

    render () {
        return (
            <div>
                <Search searchLastName= {this.searchLastName}/>
                <Table employees= {this.state.employees} sortEmplByName= {this.sortEmplByName} sortEmplByDOB= {this.sortEmplByDOB} />
            </div>
        )
    }
}  

export default Main;