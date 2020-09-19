import React from 'react';
import './LoaderButton.css';
import { Button, Glyphicon } from 'react-bootstrap';


export default function LoaderButton({isLoading, className = '', disabled = false, ...props}) {
    return (
        <Button disabled={disabled || isLoading} className={`LoaderButton ${className}`} {...props}>
            {isLoading && <Glyphicon glyph="refresh" className="spinning"/>}
            {props.children}
        </Button>
    );
};