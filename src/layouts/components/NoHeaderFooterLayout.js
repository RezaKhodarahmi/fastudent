import React from 'react';

const NoHeaderFooterLayout = ({ children }) => {
    return (
        <div sx={{zIndex: "999"}}>
            {children}
        </div>
    );
};

export default NoHeaderFooterLayout;
