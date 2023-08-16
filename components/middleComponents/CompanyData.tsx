import { WorkExprienceObject } from '@/shared/UserWorkExprienceData';
import { motion } from 'framer-motion';
import React from 'react';
import { TiArrowForward } from 'react-icons/ti';

type Props = {
  companyInfo: WorkExprienceObject;
};

const CompanyData = ({ companyInfo }: Props) => {
  const {
    companyDetail,
    position,
    startDate,
    endDate,
    notableContributions,
    majorTechStacks,
  } = companyInfo;
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-l font-titleFont">
        {position}
        <span className="text-textGreen tracking-wide">@{companyDetail.name}</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {startDate} - {endDate}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {notableContributions.map((contribution, index) => (
          <li key={index} className="text-base flex gap-2 to-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {contribution}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CompanyData;
