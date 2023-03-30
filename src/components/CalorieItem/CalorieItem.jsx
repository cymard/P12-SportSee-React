import React, { useEffect, useState } from 'react';
import './CalorieItem.scss';
import PropTypes from 'prop-types';

function CalorieItem({ unit, value, color, children, name }) {
    const [colorClass, setColorClass] = useState('');

    useEffect(() => {
        const colors = new Map([
            ['pink', 'calorie-item-visual-bg-pink'],
            ['blue', 'calorie-item-visual-bg-blue'],
            ['yellow', 'calorie-item-visual-bg-yellow'],
            ['red', 'calorie-item-visual-bg-red'],
        ]);

        if (!colors.has(color)) {
            setColorClass(colors.get('blue'));
            return;
        }

        setColorClass(colors.get(color));
    }, []);

    return (
        <div className="calorie-item">
            <div className={'calorie-item-visual ' + colorClass}>{children}</div>
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
    unit: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['red', 'blue', 'yellow', 'pink']),
    children: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
};
