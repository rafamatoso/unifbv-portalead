import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import { CustomProgressBar } from '../../../../components/CustomProgressBar';

export const ModalUpload = ({ value, show }) => (
  <Dialog open={show} fullWidth>
    <DialogTitle>
      <FormattedMessage id="loadingVideo" />
    </DialogTitle>
    <DialogContent>
      <CustomProgressBar variant="determinate" value={value} />
    </DialogContent>
  </Dialog>
);
