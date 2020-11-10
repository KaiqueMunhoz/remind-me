import React from 'react';
import { Alert } from 'react-native';

import close from '../../assets/images/close.png';

import {
  Card, CardContent, CardPriorityContent, CardPriority,
  CardCloseButton, CardCloseButtonIcon, CardTitleContent, CardTitle,
  CardDateContent, CardDate, CardStatusContent, CardStatus,
} from './styles';

const TaskCard = (task, key) => {
  const alertMessage = () => {
    Alert.alert('It is not available yet', 'Developers are working');
  };

  return (
    <>
      <Card key={key} status={task.status} onPress={() => alertMessage()}>
        <CardContent>
          <CardPriorityContent>
            <CardPriority>
              {`P${task.priority}`}
            </CardPriority>
            <CardCloseButton onPress={() => alertMessage()}>
              <CardCloseButtonIcon source={close} />
            </CardCloseButton>
          </CardPriorityContent>
          <CardTitleContent>
            <CardTitle>
              {task.title}
            </CardTitle>
          </CardTitleContent>
          <CardDateContent>
            <CardDate>
              {task.date}
            </CardDate>
          </CardDateContent>
          <CardStatusContent>
            <CardStatus status={task.status}>
              {task.status}
            </CardStatus>
          </CardStatusContent>
        </CardContent>
      </Card>
    </>
  );
};

export default TaskCard;
