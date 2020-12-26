import {themes, ThemeContext} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import React from 'react';
class Parent extends React.Component{
    constructor(props){
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: 
                    state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
            }));
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <div>
                <ThemeTogglerButton/>
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default Parent;