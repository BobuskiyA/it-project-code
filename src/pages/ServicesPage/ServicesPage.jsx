import { ServicesCard } from './ServicesCard/ServicesCard';
import { Сontacts } from './Сontacts';
import  ServicesCardContent from './ServicesCardContent/ServicesCardContent.json';
import './ServicesPage.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import './Swiper/swiper.scss'; // core Swiper
import './Swiper/pagination/pagination.scss'; // Pagination module
import { ServicesPageHead } from './ServicesPageHead/ServicesPageHead';

import { motion } from 'framer-motion';

export const ServicesPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="services-page"
  >
    <ServicesPageHead />

    <div className="services-page__content">
      <ul className="services-page__list">
        {ServicesCardContent.map(({
          id,
          photo_link,
          title,
          content,
          price,
        }) => (
          <ServicesCard
            id={id}
            photo_link={photo_link}
            title={title}
            content={content}
            price={price}
          />
        ))}
      </ul>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="services-page__slider"
      >
      {ServicesCardContent.map(({
          id,
          photo_link,
          title,
          content,
          price,
        }) => (
          <SwiperSlide>
            <ServicesCard
              id={id}
              photo_link={photo_link}
              title={title}
              content={content}
              price={price}
            />
          </SwiperSlide>
        ))}
    </Swiper>

      <Сontacts />
    </div>
  </motion.div>
);
