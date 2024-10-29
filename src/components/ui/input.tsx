'use client'
import React, {FC, HTMLAttributes, useState} from 'react';
import IconButton from "@/@core/components/button/IconButton";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    placeholder?: string
    backGroundLabel?: string;
    icon?: React.ReactNode
    error?: boolean
    errorMessage?:string
}

/**
 * @param backGroundLabel
 *
 * this property is used to apply background the input label when input is active
 *
 * @param defaultValue 'bg-card'
 */
export const Input: FC<InputProps> = ({backGroundLabel = 'bg-card', icon, value = '', error = false, errorMessage='',...props}) => {
    const [isFocused, setIsFocused] = useState(false); // Estado para controlar el enfoque

    return (
        <div className="relative w-full">
            <input
                {...props}
                className={`peer w-full h-12 bg-transparent text-foreground text-sm border-[1.5px] border-input rounded-md px-3 py-2 transition duration-300 ease focus:outline-none hover:border-[1px] focus:${error ? 'border-red-500' : 'border-primary'} hover:${error ? 'border-red-500' : 'border-muted-foreground'} shadow-sm focus:shadow focus:border-2 ${error ? 'border-red-500' : ''}
                   ${isFocused ? 'placeholder:text-muted-foreground' : 'placeholder:text-transparent'}`}
                onFocus={() => setIsFocused(true)} // Establece el enfoque
                onBlur={() => setIsFocused(false)} // Limpia el enfoque
                placeholder={props.placeholder}
                value={value}

            />
            {icon && (
                <IconButton className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
                    {icon}
                </IconButton>
            )}
            <span className={'text-red-500 ml-3 text-sm'}>{errorMessage?errorMessage:''}</span>
            <label style={{top: isFocused ? '-0.66rem' : ''}}
                   className={`absolute cursor-text px-1 left-2.5 text-base font-normal transition-all transform origin-left 
                    peer-placeholder-shown:top-1.5 
                    peer-focus:left-2.5 
                    peer-focus:text-sm
                    peer-focus:scale-90 
                    pointer-events-none
                      ${value || isFocused ? '-top-2.5 text-sm scale-90' : 'top-2.5'} 
                    ${isFocused || value ? backGroundLabel : 'bg-transparent'}
                     ${(error && isFocused) || error ? 'text-red-500' : isFocused ? 'text-primary' : 'text-muted-foreground'}`}

            >
                {props.label}
            </label>
        </div>
    );
};

export default Input;
