import styled from "styled-components";
import {Link} from "react-router-dom";
import {Theme} from "../../Utils/Theme";

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: ${Theme.colors.darkColor}
    `