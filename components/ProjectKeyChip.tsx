import { findCountry } from '@/lib/countries';
import { Chip, ChipOwnProps } from '@mui/material';
import IconifyIcon from './IconifyIcons';


const getProjectLabel = (project: any, size: 'small' | 'medium' | 'large') => {
  return (
    <div style={{ display: 'inline-flex' }}>
      <span style={{ margin: 'auto' }}>{project.key}</span>
      {getCountryFlag(project.location?.country_id ?? 'AR', size)}
    </div>
  );
};

const getCountryFlag = (projectCountryId: string, size: 'small' | 'medium' | 'large') => {
  let imgSize = '20px';
  let margin = '-8px';
  if (size === 'small') {
    imgSize = '15px';
    margin = '-4px';
  } else if (size === 'medium') {
    imgSize = '20px';
    margin = '-8px';
  } else if (size === 'large') {
    imgSize = '25px';
    margin = '-10px';
  }
  const country = findCountry(projectCountryId);
  return (
    <IconifyIcon icon={country?.flag ?? 'flag:ar-4x3'} sx={{ width: imgSize, height: imgSize, borderRadius: '50%', ml: 1 }} />
  );
};

const ProjectKeyChip = ({
  project,
  size = 'medium',
  color = 'neutral'
}: {
  project: any;
  size?: 'small' | 'medium' | 'large';
  color?: ChipOwnProps['color'];
}) => {
  return <Chip key={project.key} variant="soft" label={getProjectLabel(project, size)} size={size} color={color} />;
};

export default ProjectKeyChip;
