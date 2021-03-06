import React, { ReactElement } from 'react';
import { Input } from 'components';
import { useHistory } from 'react-router';

import * as S from './header.styled';

export const Header = (): ReactElement => {
    const history = useHistory();

    const actionHandler = (userName: string) => {
        history.push(userName);
    };

    const homeHandler = () => history.push('/');

    return (
        <S.HeaderContainer>
            <S.Title onClick={homeHandler}>Gist explorer</S.Title>
            <S.InputWrapper>
                <Input placeholder="Search a user name" action={actionHandler} />
            </S.InputWrapper>
        </S.HeaderContainer>
    );
};
