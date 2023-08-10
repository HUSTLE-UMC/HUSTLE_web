import ProfileForm from './Forms/Profile';
import ClubsForm from './Forms/Clubs';
import SecuritySettingsForm from './Forms/SecuritySettings';
import RankingForm from './Forms/Ranking';
import ApplicationManagementForm from './Forms/ApplicationManagement';
import PostsForm from './Forms/Posts';
import { useState } from 'react';
import * as S from './SidebarStyle';

const Sidebar = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const handleFormChange = (form : string) => {
    setActiveForm(form);
  }

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'profile':
        return <ProfileForm />;
      case 'clubs':
        return <ClubsForm />;
      case 'security':
        return <SecuritySettingsForm />;
      case 'posts':
        return <PostsForm />;
      case 'ranking':
        return <RankingForm />;
      case 'applications':
        return <ApplicationManagementForm />;
      default:
        return null;
    }
  };

  return (
    <>
    <S.Box>
      <S.Button active={activeForm === 'profile'} onClick={() => handleFormChange('profile')}>내 프로필</S.Button>
      <S.Button active={activeForm === 'clubs'} onClick={() => handleFormChange('clubs')}>가입 동아리</S.Button>
      <S.Button active={activeForm === 'security'} onClick={() => handleFormChange('security')}>보안 설정</S.Button>
      <S.Button active={activeForm === 'posts'} onClick={() => handleFormChange('posts')}>작성한 글</S.Button>
      <S.Button active={activeForm === 'ranking'} onClick={() => handleFormChange('ranking')}>내 랭킹</S.Button>
      <S.Button active={activeForm === 'applications'} onClick={() => handleFormChange('applications')}>신청관리</S.Button>
    </S.Box>
    <div>
      {renderActiveForm()}
    </div>
    </>
  )
}

export default Sidebar;