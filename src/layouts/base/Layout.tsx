import { Box, Button } from '@mui/material';
import { memo, MouseEvent } from 'react';
import { Outlet } from 'react-router-dom';
import { Scrollbar } from '../../components/atom';
import { findAll, post, useWrapMuation, useWrapQuery } from '../../utility/http/ApiService';
import Header from './header/Header';

/**
 * 기업 레이아웃
 */
const Layout = () => {
  const queryData = useWrapQuery(['select'], async () => {
    await findAll('http://localhost:3030/users');
  });

  const saveTest = useWrapMuation<any>(['post'], async (data: any) => {
    await post('http://localhost:3030/users', { ...data });
  });

  // const modifyTest = useWrapMuation<any>(['post'], async (id: string) => {
  //   await put(`http://localhost:3030/users/${id}`);
  // });

  // const deleteTest = useWrapMuation<any>(['post'], async () => {
  //   await remove('http://localhost:3030/users');
  // });

  // const x = useMutation({
  //   mutationFn: async (id: string) => {
  //     await put(`http://localhost:3030/users/${id}`);
  //   },
  // });
  // const xdd = useMutation(async (id: string) => {
  //   await put(`http://localhost:3030/users/${id}`);
  // });

  const click = () => {
    console.log(queryData.data);
  };

  const save = (event: MouseEvent) => {
    event.preventDefault();
    saveTest.mutate({
      userId: 'test11111',
      userNm: 'test2',
      userPwd: 'asdf',
      userPhone: '0102375',
      userUseYn: 'Y',
    } as any);
  };

  // const modify = (event: MouseEvent) => {
  //   event.preventDefault();
  //   modifyTest.mutate(
  //     'test11111' as any,
  //     {
  //       userId: 'test11111',
  //       userNm: 'test23232',
  //       userPwd: 'asdf',
  //       userPhone: '0102375',
  //       userUseYn: 'Y',
  //     } as any,
  //   );
  // };

  // const removex = (event: MouseEvent) => {
  //   event.preventDefault();
  //   deleteTest.mutate({
  //     userId: 'test11111',
  //   } as any);
  // };

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
            {/* <Button onClick={(event) => modify(event)}>저장 테스트</Button>
            <Button onClick={(event) => removex(event)}>저장 테스트</Button> */}
            <Outlet />
          </Box>
        </Scrollbar>
      </Box>
    </Box>
  );
};

export default memo(Layout);
