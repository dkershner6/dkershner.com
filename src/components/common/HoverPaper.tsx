import React, { ReactElement, useMemo, useState } from "react";

import { Fade, Paper } from "@mui/material";

const HoverPaper = ({
    hoverContent,
    defaultContent,
}: {
    hoverContent: ReactElement;
    defaultContent: ReactElement;
}): ReactElement => {
    const [isHovering, setIsHovering] = useState(false);
    const [hoverNeedsToExit, setHoverNeedsToExit] = useState(false);
    const [defaultNeedsToExit, setDefaultNeedsToExit] = useState(true);

    const displayHover = useMemo(
        () => !defaultNeedsToExit && (isHovering || hoverNeedsToExit),
        [defaultNeedsToExit, isHovering, hoverNeedsToExit]
    );

    const renderContent = (): ReactElement => {
        if (displayHover) {
            return (
                <Fade
                    in={isHovering}
                    onEntered={() => setHoverNeedsToExit(true)}
                    onExited={() => setHoverNeedsToExit(false)}
                    timeout={500}
                >
                    <div>{hoverContent}</div>
                </Fade>
            );
        }
        return (
            <Fade
                in={!isHovering}
                timeout={500}
                onEntered={() => setDefaultNeedsToExit(true)}
                onExited={() => setDefaultNeedsToExit(false)}
            >
                <div>{defaultContent}</div>
            </Fade>
        );
    };

    return (
        <Paper
            sx={{
                display: "flex",
                padding: "1rem",
                height: "15rem",
                alignItems: "center",
                justifyContent: "center",
            }}
            elevation={6}
            onMouseEnter={() => {
                setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div>{renderContent()}</div>
        </Paper>
    );
};

export default HoverPaper;
