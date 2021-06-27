import React from 'react';

const ToolTip = ({children, tooltipText }) => {

     const tipRef = React.createRef(null);
    function handleMouseEnter() {
        tipRef.current.style.opacity = 1;
        tipRef.current.style.marginLeft = "20px";
    }
    function handleMouseLeave() {
        tipRef.current.style.opacity = 0;
        tipRef.current.style.marginLeft = "10px";
    }
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className=""
                style={{ left: "100%", opacity: 0 }}
                ref={tipRef}
            >
                <div
                    className="bg-black h-3 w-3 absolute"
                    style={{ left: "-6px", transform: "rotate(45deg)" }}
                />
                {tooltipText}
            </div>
            {children}
        </div>
    );
}
 
export default ToolTip;