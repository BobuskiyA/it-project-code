import OurAchievementContent from './OurAchievementContent/OurAchievementContent.json';

import './OurAchievement.scss';

export const OurAchievement = () => (
  <div className="our-achievement our-achievement-container">
    <h1 className="blue-text our-achievement--title">
      Наші досягнення
    </h1>

    <ul className="our-achievement__list">
      {Object.entries(OurAchievementContent).map(([title, text]) => (
        <li
          key={title}
          className="our-achievement__item"
        >
          <h1 className="our-achievement__item--title">
            {title}
          </h1>
          <p className="our-achievement__item--text">
            {text}
          </p>
        </li>
      ))}
    </ul>
  </div>
);
