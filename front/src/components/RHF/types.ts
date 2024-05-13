import { ReactNode } from "react"
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister, UseFormReturn, UseFormStateReturn } from "react-hook-form"
import { GroupBase } from "react-select"

export type TextInputProps = Partial<Pick<UseFormReturn, "register">> & {
        type: "text" | "email" | "number"
        name: string
        helperText: string
        placeholder?: string
        label?: string
        valueAsNumber?: boolean
    }

export type SelectProps = {
    name: string
    register: UseFormRegister<FormData>
    error: FieldError | undefined
    children: ReactNode
    label?: string
}

export type TagsSelectorProps<
    Option = unknown,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
> = {
    name: string
    register: UseFormRegister<FormData>
    error: FieldError | undefined
    label?: string
}