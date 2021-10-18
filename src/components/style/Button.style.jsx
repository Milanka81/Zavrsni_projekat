import styled from "styled-components"

export default styled.button`
  background: transparent;
  background-color: ${props => (props.primary ? "green" : "pink")};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  
`