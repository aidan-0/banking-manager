import React from "react";
import {
	Form,
	FormControl,
	FormField,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";


const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    const inputId = `input-${name}`; // Generate unique ID based on name

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label" htmlFor={inputId}>
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                {...field}
                                id={inputId}
                                type={name === 'password' ? 'password' : 'text'}
                                placeholder={placeholder}
                                className="input-class"
                                autoComplete={name === 'email' ? 'email' : name === 'password' ? 'current-password' : ''}
                            />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    );
};


export default CustomInput;
