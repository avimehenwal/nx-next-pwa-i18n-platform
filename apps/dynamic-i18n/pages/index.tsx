import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './index.module.scss';
import i18nConfig from '../next-i18next.config';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nConfig)),
      // Will be passed to the page component as props
    },
  };
}
export function Index() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              {t('flights')} 👋
            </h1>
            <h2>{t('search')} 👋</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
