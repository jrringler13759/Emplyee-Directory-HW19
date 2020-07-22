import React from 'react';
import Search from "./Search";
import Table from "./Table";
import employees from "../utils/randomusers.json"

class Main extends React.Component {
    state = {
      employees: employees,
      search: "",
      nameOrdered: "A",
      dobOrdered: "" 
    };

    searchLastName = (event) => {
       let searchName = event.target.value;

        let foundEmpl = employees.filter(found => {
            return (
                found.lastName.toLowerCase().includes(searchName.toLowerCase())
            )
        })
        this.setState({employees: foundEmpl})
    }

    sortEmplByName = () => {
 //if state ===? then switch to the other state
        if ( this.state.nameOrdered === "A" || this.state.nameOrdered === "" ) {
            let descEmpl = this.state.employees.sort((a,b) =>  a.lastName < b.lastName ? 1 : -1 )

            this.setState({
                employees: descEmpl,
                nameOrdered: "D",
                dobOrdered: ""
            });
        } else {
            let ascEmpl = this.state.employees.sort((a,b) =>  a.lastName > b.lastName ? 1 : -1 )

            this.setState ({
                employees: ascEmpl,
                nameOrdered: "A",
                dobOrdered: ""
            });
        }

        
    }

    sortEmplByDOB = () => {
        if ( this.state.dobOrdered === "A" || this.state.dobOrdered === "" ) {
            let descEmpl = this.state.employees.sort((a,b) =>  new Date(b.dob) - new Date(a.dob))

            this.setState({
                employees: descEmpl,
                nameOrdered: "",
                dobOrdered: "D"
            });
        } else {
            let ascEmpl = this.state.employees.sort((a,b) =>  new Date(a.dob) - new Date(b.dob))

            this.setState ({
                employees: ascEmpl,
                nameOrdered: "",
                dobOrdered: "A"
            });
        }
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