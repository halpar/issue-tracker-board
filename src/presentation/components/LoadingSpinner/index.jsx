import React from 'react';
import { Spin, LoadingSpinnerStyles } from './styles';

function LoadingSpinner({ check, size, fullHeight }) {
    return (
        <LoadingSpinnerStyles fullHeight={fullHeight}>
            <Spin size={size || 'middle'} />
        </LoadingSpinnerStyles>
    );
}
export default LoadingSpinner;
