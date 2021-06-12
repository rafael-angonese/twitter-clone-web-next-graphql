import { FunctionComponent } from 'react';

import { StyledButton, Spinner } from './styles';

interface Props {
    outlined?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: FunctionComponent<Props> = ({
    children,
    loading,
    disabled,
    onClick,
    ...rest
}) => {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            loading={loading}
            {...rest}
        >
            {!loading ? children : <Spinner />}
        </StyledButton>
    );
};

export default Button;
