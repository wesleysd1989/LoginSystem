
import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        const styles = {
            link: {
                color: "white",
                ":hover": {
                    textDecoration: "none",
                    color: "red",
                },
            },
        };
    }

    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>
                <a href="#/login">page login</a>
            </div>
        )
    }
}

export default Home