import React from 'react';
import './Card.css'
interface CardProps {
  children?: any,
  className?:any
}


export const Card: React.FC<CardProps> = function({
    children,
    className
}) 
{
    className = 'card ' + className


    return (
    <div className={className}>
        {children}
    </div>
    )
}