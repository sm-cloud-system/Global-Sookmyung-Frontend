import App from '@/App.jsx';
import Board from '@pages/Board';
import Post from '@pages/Post';
import PostCreation from '@pages/PostCreation';
import Search from '@pages/Search';
import MyPage from '@pages/MyPage';
import Login from '@pages/Login';
import GroupBoard from '@pages/GroupBoard';
import SignUp from '@pages/SignUp';
import AccountRecovery from '@pages/AccountRecovery';
import NotFound from '@pages/NotFound';

import { PATH } from '@constants';

export const routes = [
  {
    path: PATH.root,
    element: <App />,
    children: [
      {
        index: true,
        element: <Board />,
      },
      {
        path: PATH.allBoard,
        element: <Board />,
      },
      {
        path: PATH.internationalBoard,
        element: <Board />,
      },
      {
        path: PATH.post,
        element: <Post />,
      },
      {
        path: PATH.postCreation,
        element: <PostCreation />,
      },
      {
        path: PATH.search,
        element: <Search />,
      },
      {
        path: PATH.myPage,
        element: <MyPage />,
      },
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.myPost,
        element: <GroupBoard />,
      },
      {
        path: PATH.bookmark,
        element: <GroupBoard />,
      },
      {
        path: PATH.findId,
        element: <AccountRecovery />,
      },
      {
        path: PATH.findPw,
        element: <AccountRecovery />,
      },
      {
        path: PATH.signUp,
        element: <SignUp />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
