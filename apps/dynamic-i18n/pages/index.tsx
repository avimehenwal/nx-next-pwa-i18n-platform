import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import i18nConfig from '../next-i18next.config';
import styles from './index.module.scss';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nConfig)),
      // Will be passed to the page component as props
    },
  };
}
export function Index() {
  const router = useRouter();
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
      <footer>
        <p>&copy; 2022</p>
        <h5>Supported Languages</h5>
        <ol>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ol>
      </footer>
    </div>
  );
}

export default Index;
