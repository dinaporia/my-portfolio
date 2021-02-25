import styled from 'styled-components';


const Wrapper = styled.div`
    padding: 3em;
    padding-top: 4em;
    background: ${({color, theme: {colors}}) => colors[color]};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Text = styled.p`
    font-size: ${props => props.theme.fontSizes.medium};
    text-align: center;
    color: white;
    margin-bottom: 2em;
`;

const Title = styled.h2`
    font-size: ${props => props.theme.fontSizes.large};
    text-align: center;
    color: #f0f8ff;
    margin: 1em;
`;

export { Wrapper, Text, Title };