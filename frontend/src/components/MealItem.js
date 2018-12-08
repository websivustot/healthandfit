import React from 'react';

class MealItem extends React.Component {
    render(){
        const item = this.props.item;
        console.log(item)
        return (
            <tr>
                <td className="text-left">{item.description}</td><td className="text-right">{item.energy} kcal</td>
            </tr>
        )
    }
} 

export default MealItem;