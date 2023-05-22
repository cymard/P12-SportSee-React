import React, { useEffect, useState } from 'react';
import './calorieItem.scss';
import PropTypes from 'prop-types';

function CalorieItem({ img, imgAlt, unit, value, color, name }) {
    const [colorClass, setColorClass] = useState('');
    const colors = new Map([
        ['pink', 'calorie-item-visual-bg-pink'],
        ['blue', 'calorie-item-visual-bg-blue'],
        ['yellow', 'calorie-item-visual-bg-yellow'],
        ['red', 'calorie-item-visual-bg-red'],
    ]);

    useEffect(() => {
        if (colors.has(color)) {
            setColorClass(colors.get(color));
        }
    }, []);

    return (
        <div className="calorie-item">
            <div className={'calorie-item-visual ' + colorClass}>
                <img src={img} alt={imgAlt} />
            </div>
            <div className="calorie-item-text-container">
                <span>
                    {value}
                    {unit}
                </span>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default CalorieItem;

CalorieItem.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    unit: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['red', 'blue', 'yellow', 'pink']),
    name: PropTypes.string.isRequired,
};
