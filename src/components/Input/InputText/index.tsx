import React from 'react';
import styled from 'styled-components';

const InputGroup = styled.div`
    position: relative;
    margin: 10px;
    width: 100%;
`;

const InputLabel = styled.label`
    position: absolute;

    color: var(--gray);
    pointer-events: none;
    left: 20px;
    top: 14px;
    transition: 0.3s ease all;
    font-size: 14px;
`;

const InputField = styled.input`
    width: 100%;
    padding: 20px 16px 16px 5px;
    outline: none;
    border: 0.1px solid var(--gray);
    font-size: 18px;
    border-radius: 5px;
    background: var(--search);

    &:focus {
        border: 1px solid var(--twitter);
    }

    &:focus + ${InputLabel} {
        top: 3px;
        left: 5px;
        font-size: 14px;
        color: var(--twitter);
    }

    &:valid + ${InputLabel} {
        top: 3px;
        left: 5px;
        font-size: 14px;
        color: var(--twitter);
    }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: any;
    setValue: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, setValue, ...rest }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    return (
        <InputGroup>
            <InputField value={value} onChange={handleChange} {...rest} />
            <InputLabel>{label}</InputLabel>
        </InputGroup>
    );
};

export default Input;
