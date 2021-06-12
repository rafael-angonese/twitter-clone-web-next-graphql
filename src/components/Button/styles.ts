import styled, { css, keyframes } from 'styled-components';

interface Props {
    outlined?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const StyledButton = styled.button<Props>`
    background: ${props => (props.outlined ? 'transparent' : 'var(--twitter)')};
    color: ${props => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
    border: ${props => (props.outlined ? '1px solid var(--twitter)' : 'none')};

    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;
    display: flex;
    justify-content: center;

    cursor: pointer;
    outline: 0;

    &:hover {
        background: ${props =>
            props.outlined
                ? 'var(--twitter-dark-hover)'
                : 'var(--twitter-light-hover)'};
    }

    ${({ loading }) =>
        loading &&
        css`
            opacity: 0.8;
            cursor: progress;
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `}
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;

    background: transparent;

    border: 4px solid rgba(255, 255, 255, 0.5);
    border-top-color: white;

    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
`;
