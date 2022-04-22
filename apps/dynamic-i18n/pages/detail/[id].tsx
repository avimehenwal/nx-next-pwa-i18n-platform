import * as React from 'react';
import i18nConfig from '../../next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['booking-detail', 'common'],
        i18nConfig
      )),
    },
  };
}

const Detail = () => {
  const { t } = useTranslation();
  return <div>{t('booking-detail:carry_on_luggage_information')}</div>;
};

export default Detail;
