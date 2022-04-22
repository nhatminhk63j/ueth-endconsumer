import React, { memo, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DragItem = memo(({ id, onMoveItem, children }: any) => {
  const ref = useRef(null);

  const [{ isDragging }, connectDrag] = useDrag({
    item: { id, type: 'IMG' },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const [, connectDrop] = useDrop({
    accept: 'IMG',
    hover(hoveredOverItem: any) {
      if (hoveredOverItem.id !== id) {
        onMoveItem(hoveredOverItem.id, id);
      }
    },
  });

  connectDrag(ref);
  connectDrop(ref);

  const opacity = isDragging ? 0 : 1;
  const containerStyle = { opacity };

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      forwardedRef: ref,
      style: containerStyle,
    });
  });
});

export default DragItem;
