import React from 'react';

//styled componets
import{
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors

} from "./../styles/appStyles";

//icons
import {Entypo} from "@expo/vector-icons";



const Header = () => {
    return (
        <HeaderView>
            <HeaderTitle>work</HeaderTitle>
            <HeaderButton>
                <Entypo name="trash" size={25} color={colors.alternative} />
            </HeaderButton>
        </HeaderView>

    );
    
}

export default Header;