import type { ImageMetaProps } from '@lib/types/ImageMetaProps';
import { ModalWindow } from '@shared/ModalWindow';
import { TabsBase } from '@shared/TabsBase';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';
import cls from './ImagesManager.module.scss';
import {
  ImagesManagerDownload,
  ImagesManagerMedia,
  type MediaProps,
} from './common';

interface ImagesManagerProps {
  title?: string;
  onSubmit: (value: ImageMetaProps | null) => void;
}

export const ImagesManager: FC<ImagesManagerProps> = ({ title, onSubmit }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [media, setMedia] = useState<ImageMetaProps | null>(null);
  const t = useTranslations();

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const handleSubmit = () => {
    // TODO: handle submit
    setActiveTab(0);
    onSubmit(media);
  };

  const handleSelectMedia = (image: MediaProps) => {
    setMedia(image);
  };

  const tabs = [
    {
      label: t('admin.download_files'),
      description: <ImagesManagerDownload handleActiveTab={handleActiveTab} />,
    },
    {
      label: t('admin.media_library'),
      description: <ImagesManagerMedia onSelectMedia={handleSelectMedia} />,
    },
  ];

  return (
    <ModalWindow
      modalType='imagesManager'
      size='xxl'
      title={title ?? t('admin.image_manager')}
      onSubmit={handleSubmit}>
      <TabsBase
        items={tabs}
        activeTab={activeTab}
        className={cls.ImagesManager}
      />
    </ModalWindow>
  );
};

ImagesManager.displayName = 'ImagesManager';
