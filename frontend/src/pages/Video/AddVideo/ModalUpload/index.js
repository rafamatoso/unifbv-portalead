import React from "react";

import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { CustomProgressBar } from "../../../../components/CustomProgressBar";

export const ModalUpload = ({ value, show }) => {
  return (
    <Dialog open={show} fullWidth>
      <DialogTitle>Carregando video!!!</DialogTitle>
      <DialogContent>
        <CustomProgressBar variant="determinate" value={value} />
      </DialogContent>
    </Dialog>
  );
};
