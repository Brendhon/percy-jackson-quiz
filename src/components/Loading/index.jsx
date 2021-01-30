import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Widget from '../Widget';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <CircularProgress variant="indeterminate" color="white" />
      </Widget.Content>
    </Widget>
  );
}
