import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { Company, CompanyCard } from '../CompanyCard';
import classNames from "classnames"
import { Modal } from '@/ui/Modal';
import { Button } from '@/ui/Button';
import Loader from '@/assets/img/loader.svg';
import { AppImage } from '@/ui/AppImage';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import axios from 'axios';

import cls from './CompaniesListPage.module.scss'

type CardAction = 'show' | 'delete' | 'more';

const modalContentMap: Record<CardAction, string> = {
  'delete': 'Нажата кнопка "Удалить" карточки',
  'show': 'Нажата кнопка "Показать" карточки',
  'more': 'Нажата кнопка "Подробнее" карточки',
}

export const CompaniesListPage = () => {
  const [isContentLoading, setContentIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);
  const [error, setError] = useState('');
  const [offset, setOffset] = useState(0);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [modalContent, setModalContent] = useState('');
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    callback: () => {
      if (error) return;

      setContentIsLoading(true);

      axios.post('http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesLong', {
        offset: offset,
        limit: 10,
      },
        {
          headers: {
            'TOKEN': '123',
          }
        }
      ).then((res) => {
        setCompanies(c => c = [...c, ...res.data.companies])
        setOffset(offset => offset + 10);
        setContentIsLoading(false);

      }).catch((error) => {
        const status = error.response.status;

        if (status === 400) {
          setError(error.response.data.message)
        } else if (status === 401) {
          setError('Ошибка авторизации');
        } else if (status === 500) {
          setError('Всё упало')
        }

        setContentIsLoading(false);
      });

    },
  });

  useEffect(() => {
    if (error) setIsOpenError(true);
  }, [error])

  const onButtonClick = useCallback(
    (action: CardAction) => (id: string) => {
      setModalContent(modalContentMap[action] + ` ${id}`)
      setIsOpen(true);
    }, []
  );

  const onCloseModal = useCallback(
    () => {
      setIsOpen(false);
    }, []
  );

  const onCloseErrorModal = useCallback(
    () => {
      setIsOpenError(false);
    }, []
  );

  return (
    <div className={classNames(cls.CompaniesListPage, {}, [])} >
      <header className={cls.Header}>
        Управление картами
      </header>
      <main className={cls.list}>
        {companies.map(c => (
          <CompanyCard
            key={c.company.companyId}
            data={c}
            onShowClick={onButtonClick('show')}
            onMoreClick={onButtonClick('more')}
            onDeleteClick={onButtonClick('delete')}
          />
        ))}
        {!isContentLoading && companies.length === 0 && (
          <span className={cls.empty}>Компаний нет</span>
        )}
        {isContentLoading && (
          <div className={cls.listLoader}>
            <AppImage src={Loader} />
            Подгрузка компаний
          </div>
        )}
        <div className={cls.trigger} ref={triggerRef} />
      </main>
      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <div className={cls.modalContent}>
          {modalContent}
          <Button onClick={onCloseModal}>Хорошо</Button>
        </div>
      </Modal>
      <Modal isOpen={isOpenError} onClose={onCloseErrorModal}>
        <div className={cls.modalContent}>
          {error}
          <Button onClick={onCloseModal}>Хорошо</Button>
        </div>
      </Modal>
    </div>
  )
}
