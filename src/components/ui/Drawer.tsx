import React from "react";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    position?: "left" | "right";
    children: React.ReactNode;
    classNameContent?: string;
}

const Drawer: React.FC<DrawerProps> = ({
                                           isOpen,
                                           onClose,
                                           position = "left",
                                           children,
                                           classNameContent = ''
                                       }) => {
    const translateClass = position === "left" ? "-translate-x-full" : "translate-x-full";
    const openClass = position === "left" ? "translate-x-0" : "-translate-x-0";

    return (
        <div
            className={`fixed inset-0 flex ${
                position === "left" ? "justify-start" : "justify-end"
            } bg-black bg-opacity-50 z-50 ${isOpen ? "block" : "hidden"}`}
            onClick={onClose}
        >
            <div
                className={`w-64 h-full bg-background transform ${isOpen ? openClass : translateClass} transition-transform duration-300 ease-in-out flex flex-col ${classNameContent}`}
            >
                <div className={`p-4 flex-grow`}>{children}</div>

            </div>
        </div>
    );
};

export default Drawer;
