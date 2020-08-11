import * as React from "react";
import Todolist from "../Todolist/Todolist";
import "./style.css";

class Todolists extends React.Component{
    render(){
        const todoArray = [
            {
                task: "Get out of bed.",
                when: "(Wed Sep 13 2017)",
                banner:"https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Drax_Project_featuring_Hailee_Steinfeld_-_Woke_Up_Late.png/220px-Drax_Project_featuring_Hailee_Steinfeld_-_Woke_Up_Late.png",
            },
            {
                description: "Brush teeth.",
                when: "(Thu Sep 14 2017)",
                banner: "https://upload.wikimedia.org/wikipedia/commons/4/49/Toothpasteonbrush.jpg"


            },
            {   
                description: "Eat breakfast.",
                when: "(Fri Sep 15 2017)",
                banner: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/1200px-NCI_Visuals_Food_Meal_Breakfast.jpg"

            }
        
        ];
        return (
            <div className = "todos-card">
                {todoArray.map(todo => (
                    <Todolist
                        task={todo.task}
                        when={todo.when}
                        banner={todo.banner}
                    />
                ))}
            </div>
        );
        /*return <div className="todos-card">
                <Todolist 
                task= "Get out of bed." 
                when= "(Wed Sep 13 2017)" 
                banner="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Drax_Project_featuring_Hailee_Steinfeld_-_Woke_Up_Late.png/220px-Drax_Project_featuring_Hailee_Steinfeld_-_Woke_Up_Late.png"
                />
                <Todolist 
                task= "Brush teeth." 
                when= "(Thu Sep 14 2017)" 
                banner="https://upload.wikimedia.org/wikipedia/commons/4/49/Toothpasteonbrush.jpg"
                />
                <Todolist 
                task= "Eat breakfast." 
                when= "(Fri Sep 15 2017)" 
                banner="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/NCI_Visuals_Food_Meal_Breakfast.jpg/1200px-NCI_Visuals_Food_Meal_Breakfast.jpg"
                 />
                </div>*/
    }

}

export default Todolists;