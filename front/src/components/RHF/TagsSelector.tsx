import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import Select, { GroupBase } from 'react-select';
import { TagsSelectorProps } from "./types";




const TagsSelector: FC<TagsSelectorProps> = ({
    name,
    label,
    register,
    error,
    // options
}) => (
    <>
        {label && <label htmlFor={name}>{label}</label>}
        <Select
            isMulti
            name="tags"
            // {...{ options }}
            className="basic-multi-select"
            classNamePrefix="select"
        />
        {error && <span className="error-message">{error.message}</span>}
    </>
);
export default TagsSelector;