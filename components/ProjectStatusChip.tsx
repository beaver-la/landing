import { Chip, ChipOwnProps, Tooltip, Typography } from '@mui/material';

export interface ProjectStatus {
  id: string;
  label: string;
  description: string;
  color: ChipOwnProps['color'];
}

export const projectStatuses: ProjectStatus[] = [
  {
    id: 'pending',
    label: 'Pending',
    description: 'The project is awaiting approval or preparation. It has not yet been made available for investment.',
    color: 'default'
  },
  {
    id: 'open',
    label: 'Open',
    description: 'The project is now open for investment. Investors can contribute funds during this stage.',
    color: 'primary'
  },
  {
    id: 'financed',
    label: 'Financed',
    description: 'The funding goal has been successfully reached. No further investments are being accepted.',
    color: 'success'
  },
  {
    id: 'work_in_progress',
    label: 'Work in Progress',
    description: 'The development or construction of the project is currently underway.',
    color: 'warning'
  },
  {
    id: 'in_exploitation',
    label: 'In Exploitation',
    description: 'The project is operational and generating income. Investors may begin receiving returns based on project performance.',
    color: 'primary'
  },
  {
    id: 'closed',
    label: 'Closed',
    description: 'The project has been completed and is no longer active. All financial obligations and distributions have been finalized.',
    color: 'error'
  }
];

const getStatus = (statusVal: string): ProjectStatus | undefined => {
  return projectStatuses.find((s: any) => s.id === statusVal);
};

const getStatusBadgeColor = (statusVal: string, status?: ProjectStatus): ChipOwnProps['color'] => {
  if (status) return status.color;
  switch (statusVal) {
    case 'pending':
      return 'default';
    case 'open':
      return 'primary';
    case 'financed':
      return 'success';
    case 'work_in_progress':
      return 'warning';
    case 'closed':
      return 'error';
    case 'in_exploitation':
      return 'primary';
    default:
      return 'primary';
  }
};

const getStatusName = (statusVal: string, status?: ProjectStatus): string => {
  if (status) return status.label;
  return statusVal.replaceAll('_', ' ');
};

const ProjectStatusChip = ({ project, size = 'medium' }: { project: any; size?: 'small' | 'medium' }) => {
  const status: ProjectStatus | undefined = getStatus(project.status);
  const statusName: string = getStatusName(project.status, status);
  const statusDescription: string = status?.description ?? statusName;
  const statusColor: ChipOwnProps['color'] = getStatusBadgeColor(project.status, status);

  return (
    <Tooltip
      arrow
      title={
        <>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
            {statusName}
          </Typography>
          <Typography variant="body2">{statusDescription}</Typography>
        </>
      }
    >
      <Chip label={statusName} variant="outlined" color={statusColor} sx={{ textTransform: 'capitalize', fontWeight: 'bold' }} size={size} />
    </Tooltip>
  );
};

export default ProjectStatusChip;
