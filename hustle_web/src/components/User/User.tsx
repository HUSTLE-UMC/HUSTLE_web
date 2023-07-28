import React, {useState} from "react"
import styled from "styled-components";

const User = () =>{
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

    const HorizontalLine = styled.div`
    margin-top: 50px;
    border-bottom: solid 2px  rgba(0, 0, 0, 0.25);
    `;

    // return (
    //
    // )
}

export default User;
