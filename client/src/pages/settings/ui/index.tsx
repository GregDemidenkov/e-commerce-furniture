import { SettingsForm } from "@/features/settingsForm";
import { PageTitle, ProfilePageWrapper } from "@/shared/ui"

import styles from './styles.module.scss';

export const SettingsPage = () => {
  return (
    <ProfilePageWrapper>
      <div>
        <PageTitle title={'Настройки'}/>
        <div className={styles.settingsFormWrapper}>
          <SettingsForm />
        </div>
      </div>
    </ProfilePageWrapper>
  );
}