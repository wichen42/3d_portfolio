import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experiance}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1D1836',
      color: '#FFF'
    }}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experiance.date}
    iconStyle={{background: experiance.iconBg}}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img src={experiance.icon} alt={experiance.company_name} className="w-[60%] h-[60%] object-contain"/>
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experiance.title}</h3>
      <p className="text-secondary text-[16px] font-semibold m-0">{experiance.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experiance.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Projects I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experiance</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiance, index) => (
            <ExperienceCard key={index} experiance={experiance}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");