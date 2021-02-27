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


export { Wrapper };