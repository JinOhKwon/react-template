import { Box, Button } from '@mui/material';
import { memo, MouseEvent } from 'react';
import { Outlet } from 'react-router-dom';
import { Scrollbar } from '../../components/atom';
import { findAll, post, put, remove, useWrapMuation, useWrapQuery } from '../../utility/http/ApiService';
import Header from './header/Header';

interface IUserRequest {
  userId: string;
  userNm: string;
  userPwd: string;
  userPhone: string;
  userUseYn: string;
}

type IUserResponse = IUserRequest;
type IUserId = Omit<IUserRequest, 'userNm' | 'userPwd' | 'userPhone' | 'userUseYn'>;

/**
 * 기업 레이아웃
 */
const Layout = () => {
  const queryData = useWrapQuery(['select'], async () => {
    return await findAll('http://localhost:3030/users');
  });

  const saveTest = useWrapMuation<IUserRequest, IUserResponse>(['post'], async (data) => {
    return await post<IUserResponse>('http://localhost:3030/users', data);
  });

  const modifyTest = useWrapMuation<IUserRequest, IUserResponse>(['put'], async (data) => {
    return await put(`http://localhost:3030/users/${data.userId}`, data);
  });

  const deleteTest = useWrapMuation<IUserId, IUserResponse>(['delete'], async (data) => {
    return await remove(`http://localhost:3030/users/${data.userId}`);
  });

  const click = () => {
    console.log(queryData.data);
  };

  const save = (event: MouseEvent) => {
    event.preventDefault();
    const userRequest: IUserRequest = {
      userId: 'test11111',
      userNm: 'test212312312313',
      userPwd: 'asdf',
      userPhone: '0102375',
      userUseYn: 'Y',
    };
    saveTest.mutateAsync(userRequest);
  };

  const modify = (event: MouseEvent) => {
    event.preventDefault();
    const userRequest: IUserRequest = {
      userId: 'test11111',
      userNm: 'test2123123123',
      userPwd: 'asdf',
      userPhone: '0102375',
      userUseYn: 'Y',
    };
    modifyTest.mutateAsync(userRequest);
  };

  const removex = (event: MouseEvent) => {
    event.preventDefault();
    const userRequest: IUserId = {
      userId: 'test11111',
    };
    deleteTest.mutateAsync(userRequest);
  };

  return (
    <Box>
      <Box component='header'>
        <Header />
      </Box>
      <Box component='main'>
        <Scrollbar>
          <Box component='section'>
            <Button onClick={() => click()}>조회 테스트</Button>
            <Button onClick={(event) => save(event)}>저장 테스트</Button>
            <Button onClick={(event) => modify(event)}>수정 테스트</Button>
            <Button onClick={(event) => removex(event)}>삭제 테스트</Button>
            <Outlet />
          </Box>
        </Scrollbar>
      </Box>
    </Box>
  );
};

export default memo(Layout);
